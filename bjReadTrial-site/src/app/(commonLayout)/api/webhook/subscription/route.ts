import Stripe from "stripe"
import { stripe } from "src/libs/stripe/util/stripe"
import {
  createSubscriptionService,
  deleteSubscriptionService,
  updateSubscriptionService,
} from "src/utils/subscription/subscription"

const stripeEvents = new Set([
  "checkout.session.completed",
  //   "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
])

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get("stripe-signature")
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  let event: Stripe.Event

  //stripeのwebhookの検証
  if (!sig || !webhookSecret) {
    return new Response(`Webhook secret not configured`, {
      status: 401,
    })
  }

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err: any) {
    return new Response(`Webhook Error: ${err.message}`, { status: 403 })
  }

  if (!stripeEvents.has(event.type)) {
    return new Response(`Webhook Error: ${event.type} not supported`, {
      status: 400,
    })
  }

  try {
    const subscription = event.data.object as Stripe.Subscription
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSession: Stripe.Checkout.Session = event.data.object
        if (checkoutSession.mode !== "subscription") {
          throw new Error("Mode is not subscription")
        }
        await createSubscriptionService(
          checkoutSession.subscription as string,
          checkoutSession.customer!,
        )
        break
      case "customer.subscription.updated":
        await updateSubscriptionService(subscription.id, subscription.customer)
        break
      case "customer.subscription.deleted":
        await deleteSubscriptionService(subscription.customer)
        break
      default:
        throw new Error("Unhandled event")
    }
  } catch (error) {
    return new Response("Webhook handler failed", {
      status: 400,
    })
  }

  return new Response(JSON.stringify({ received: true }))
}
