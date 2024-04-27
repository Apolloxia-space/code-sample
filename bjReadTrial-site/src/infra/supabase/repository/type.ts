export type updateSubscriptionProps = {
  subscriptionId: string
  customerId: string
  status: string
  planId: string
  cancelAt: number | null
  currentPeriodEnd: number
  userId: string
}
