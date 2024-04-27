import { GetQuestionGroupQuery } from "src/infra/contentful/generated/graphql"

export type QuestionGroups = GetQuestionGroupQuery["questionGroupCollection"]

export type QuestionGroup = NonNullable<QuestionGroups>["items"][0]
