import { GetSubscriptionPlansQuery } from "src/infra/contentful/generated/graphql"

export type SubscriptionPlans =
  GetSubscriptionPlansQuery["subscriptionPlansCollection"]
