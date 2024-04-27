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
  const supabase = createApiRouteClient()
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) throw Error("Could not get user")
    const customer = await comfirmCustomer({
      uuid: user.id || "",
    })

    const redirectUrl = process.env.VERCEL_ENV
      ? new URL(`https://${req.headers.get("host")}/mypage`)
      : new URL(`http://${req.headers.get("host")}`)

    if (!customer) throw Error("Could not get customer")
    const { url } = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `${redirectUrl}/`,
    })
    return new Response(JSON.stringify({ url }), {
      status: 200,
    })
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: { statusCode: 500, message: err.message } }),
      {
        status: 500,
      },
    )
  }
}
