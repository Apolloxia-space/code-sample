import {
  getSubscriptionCustomerId,
  insertSubscription,
} from "src/infra/supabase/repository/subscription"
import { createCustomer } from "src/infra/stripe/repository/customer"

export const comfirmCustomer = async ({ uuid }: { uuid: string }) => {
  const { customerId, error } = await getSubscriptionCustomerId(uuid)

  if (error || !customerId) {
    // 顧客が存在しない場合は、新規作成する
    const { customerId } = await createCustomer(uuid)

    const { error: supabaseError } = await insertSubscription({
      customerId,
      userId: uuid,
    })

    if (supabaseError) throw supabaseError

    return customerId
  }
  return customerId
}
