import { Box } from "@chakra-ui/react"
import { getSubscriptionPlans } from "src/infra/contentful/repositories/subscriptionPlan"
import { PlanSelect } from "src/app/(commonLayout)/mypage/components/PlanSelect"

const PlanSelectPage = async () => {
  const subscriptionPlans = await getSubscriptionPlans()

  return (
    <Box>
      <PlanSelect subscriptionPlans={subscriptionPlans} />
    </Box>
  )
}

export default PlanSelectPage
