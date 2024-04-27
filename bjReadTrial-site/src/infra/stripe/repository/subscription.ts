import { stripe } from "src/libs/stripe/util/stripe"

/**
 * stripeからサブスクの詳細を取得する
 * @param subscriptionId subscriptionId
 * @returns サブスクリプションの詳細
 */
export const getSubscription = async (subscriptionId: string) => {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ["default_payment_method"],
  })

  return {
    subscriptionId: subscription.id,
    customerId: subscription.customer as string,
    status: subscription.status,
    planId: subscription.items.data[0].price.id,
    cancelAt: subscription.cancel_at,
    currentPeriodEnd: subscription.current_period_end,
  }
}
