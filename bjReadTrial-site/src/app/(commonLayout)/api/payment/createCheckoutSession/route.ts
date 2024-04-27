import { supabase } from "src/libs/supabase/client/routeHandlerClient"
import { stripe } from "src/libs/stripe/util/stripe"
import { comfirmCustomer } from "src/utils/subscription/customer"
import { cache } from "react"
import { cookies } from "next/headers"

const createApiRouteClient = cache(() => {
  const cookieStore = cookies()
  return supabase(cookieStore)
})

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", {
      headers: { Allow: "POST" },
      status: 405,
    })
  }

  const { planId } = await req.json()
  const supabase = createApiRouteClient()

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return new Response(
        JSON.stringify({
          error: { statusCode: 401, message: "User is not found" },
        }),
        { status: 401 },
      )
    }

    const customer = await comfirmCustomer({
      uuid: user?.id || "",
    })

    const redirectUrl = process.env.VERCEL_ENV
      ? new URL(`https://${req.headers.get("host")}/mypage`)
      : new URL(`http://${req.headers.get("host")}`)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      customer,
      customer_update: {
        address: "auto",
      },
      line_items: [
        {
          price: planId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      allow_promotion_codes: false,
      subscription_data: {
        metadata: {
          userId: user?.id,
        },
      },
      success_url: `${redirectUrl}/`,
      cancel_url: `${redirectUrl}/`,
    })

    if (session) {
      return new Response(JSON.stringify({ sessionId: session.id }), {
        status: 200,
      })
    } else {
      return new Response(
        JSON.stringify({
          error: { statusCode: 500, message: "Session is not defined" },
        }),
        { status: 500 },
      )
    }
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.log(err)
    return new Response(JSON.stringify(err), { status: 500 })
  }
}
