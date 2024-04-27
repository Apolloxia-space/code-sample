import { contentfulClient } from "src/libs/contentful/api/contentfulClient"
import { Text } from "../entities/text"
import { GetTextDocument } from "../generated/graphql"
import { FC_ENV } from "src/copied/fcEnv"

export const getText = async (displayName: string): Promise<Text> => {
  const variables = {
    displayName: displayName,
    tag: FC_ENV.CONTENTFUL_TAGS,
  }
  const data = await contentfulClient.request(GetTextDocument, variables)

  return data.textCollection
}
