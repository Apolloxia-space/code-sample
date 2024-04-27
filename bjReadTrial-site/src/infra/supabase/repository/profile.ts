import {
  Exact,
  GetUserProfileDocument,
  GetUserProfileQuery,
} from "src/infra/supabase/generated/graphql"
import { supabaseClient } from "src/libs/supabase/api/graphqlClient"

export const getProfile = async (
  userId: string,
): Promise<GetUserProfileQuery> => {
  const variables: Exact<{ userId: string }> = {
    userId,
  }
  const data = await supabaseClient.request<GetUserProfileQuery>(
    GetUserProfileDocument,
    variables,
  )

  return data
}
