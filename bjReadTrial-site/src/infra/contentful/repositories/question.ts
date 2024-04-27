import { contentfulClient } from "src/libs/contentful/api/contentfulClient"
import { QuestionGroups } from "../entities/question"
import { GetQuestionGroupDocument } from "../generated/graphql"

export const getQuestionGroups = async (): Promise<QuestionGroups> => {
  const data = await contentfulClient.request(GetQuestionGroupDocument)

  return data.questionGroupCollection
}
