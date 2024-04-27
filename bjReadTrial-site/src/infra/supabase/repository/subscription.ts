import { Customer } from "src/infra/stripe/entities/subscription"
import { toDateTime } from "src/libs/supabase/utils/date"
import { updateSubscriptionProps } from "./type"
import { supabaseAdmin } from "src/libs/supabase/client/adminClient"

export const getSubscriptionUserId = async (customer: Customer) => {
  const { data, error: noSubscriptionError } = await supabaseAdmin
    .from("trn_subscription")
    .select("user_id")
    .eq("customer_id", customer)
    .single()
  return { userId: data?.user_id, noSubscriptionError }
}

export const getSubscriptionCustomerId = async (userId: string) => {
  const { data, error } = await supabaseAdmin
    .from("trn_subscription")
    .select("customer_id")
    .eq("user_id", userId)
    .single()
  return { customerId: data?.customer_id, error }
}

export const insertSubscription = async ({
  customerId,
  userId,
}: {
  customerId: string
  userId: string
}) => {
  const { error } = await supabaseAdmin
    .from("trn_subscription")
    .insert([{ user_id: userId, customer_id: customerId, id: "" }])
  return { error }
}

export const updateSubscription = async ({
  subscriptionId,
  customerId,
  status,
  planId,
  cancelAt,
  currentPeriodEnd,
  userId,
}: updateSubscriptionProps) => {
  const subscriptionData = {
    id: subscriptionId,
    user_id: userId,
    customer_id: customerId,
    status: status,
    plan_id: planId,
    cancel_at: cancelAt ? toDateTime(cancelAt).toISOString() : null,
    current_period_end: toDateTime(currentPeriodEnd).toISOString(),
  }

  const { error } = await supabaseAdmin
    .from("trn_subscription")
    .update(subscriptionData)
    .eq("user_id", userId!)

  return { subscriptionUpdateError: error }
}

export const deleteSubscription = async (customer: Customer) => {
  const { error } = await supabaseAdmin
    .from("trn_subscription")
    .delete()
    .eq("customer_id", customer)
  return { error }
}
