import { contentfulClient } from "src/libs/contentful/api/contentfulClient"
import { Image } from "../entities/image"
import { GetImageDocument } from "../generated/graphql"
import { FC_ENV } from "src/copied/fcEnv"

export const getImage = async (displayName: string): Promise<Image> => {
  const variables = {
    displayName: displayName,
    tag: FC_ENV.CONTENTFUL_TAGS,
  }
  const data = await contentfulClient.request(GetImageDocument, variables)

  return data.imageCollection
}
