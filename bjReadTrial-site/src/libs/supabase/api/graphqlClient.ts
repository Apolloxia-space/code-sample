import { GraphQLClient } from "graphql-request"
import { config as dotenvConfig } from "dotenv"

dotenvConfig()

//prettier-ignore
export const supabaseClient = new GraphQLClient(`https://${process.env.SUPABASE_REFERENCE_ID}.supabase.co/graphql/v1`,
  {
    headers: {
      apikey: `${process.env.SUPABASE_APIKEY}`,
    },
  },
)
