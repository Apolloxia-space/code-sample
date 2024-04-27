import { stripe } from "src/libs/stripe/util/stripe"

/**
 * stripeの顧客を作成する
 * @param uuid supabase上のuser_id
 * @returns 顧客ID
 */
export const createCustomer = async (uuid: string) => {
  const customerData: { metadata: { uuid: string }; email?: string } = {
    metadata: {
      uuid: uuid,
    },
  }

  const customer = await stripe.customers.create(customerData)

  return { customerId: customer.id }
}
