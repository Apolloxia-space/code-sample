import { GraphQLClient } from "graphql-request"
import { config as dotenvConfig } from "dotenv"

dotenvConfig()

//prettier-ignore
export const contentfulClient = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID!}`,
  {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN!}`,
    },
  },
)
