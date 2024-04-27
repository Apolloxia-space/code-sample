import { GetSubscriptionPlansDocument } from "src/infra/contentful/generated/graphql"
import { FC_ENV } from "src/copied/fcEnv"
import { contentfulClient } from "src/libs/contentful/api/contentfulClient"
import { SubscriptionPlans } from "src/infra/contentful/entities/subscriptionPlan"

export const getSubscriptionPlans = async (): Promise<SubscriptionPlans> => {
  const variables = {
    tag: FC_ENV.CONTENTFUL_TAGS,
  }
  const data = await contentfulClient.request(
    GetSubscriptionPlansDocument,
    variables,
  )

  return data.subscriptionPlansCollection
}
