import { Subscription, Checkout } from "src/infra/stripe/entities/subscription"
import { getSubscription } from "src/infra/stripe/repository/subscription"
import {
  getSubscriptionUserId,
  updateSubscription,
  deleteSubscription,
} from "src/infra/supabase/repository/subscription"

export const createSubscriptionService = async (
  subscription: Checkout["Subscription"],
  customer: Subscription["Customer"],
) => {
  const { userId, noSubscriptionError } = await getSubscriptionUserId(customer)

  if (noSubscriptionError) throw noSubscriptionError

  const {
    subscriptionId,
    customerId,
    status,
    planId,
    cancelAt,
    currentPeriodEnd,
  } = await getSubscription(subscription)

  const { subscriptionUpdateError } = await updateSubscription({
    subscriptionId,
    customerId,
    status,
    planId,
    cancelAt,
    currentPeriodEnd,
    userId: userId!,
  })

  if (subscriptionUpdateError) throw subscriptionUpdateError
}

export const updateSubscriptionService = async (
  subscription: string,
  customer: Subscription["Customer"],
) => {
  const { userId, noSubscriptionError } = await getSubscriptionUserId(customer)

  if (noSubscriptionError) throw noSubscriptionError

  const {
    subscriptionId,
    customerId,
    status,
    planId,
    cancelAt,
    currentPeriodEnd,
  } = await getSubscription(subscription)

  const { subscriptionUpdateError } = await updateSubscription({
    subscriptionId,
    customerId,
    status,
    planId,
    cancelAt,
    currentPeriodEnd,
    userId: userId!,
  })

  if (subscriptionUpdateError) throw subscriptionUpdateError
}

export const deleteSubscriptionService = async (
  customer: Subscription["Customer"],
) => {
  const { error } = await deleteSubscription(customer)
  if (error) throw error
}
