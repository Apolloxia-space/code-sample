import { getProfile } from "src/infra/supabase/repository/profile"
import { ProfileForm } from "./ProfileForm"
import { cookies } from "next/headers"
import { supabase } from "src/libs/supabase/client/serverClient"
import { convertToJST } from "src/libs/supabase/utils/date"
import { cache } from "react"

const createServerClient = cache(() => {
  const cookieStore = cookies()
  return supabase(cookieStore)
})

export const Profile: React.FC = async () => {
  const supabaseClient = createServerClient()
  const {
    data: { user },
  } = await supabaseClient.auth.getUser()

  if (!user) {
    return <div>No user found</div>
  }

  const data = await getProfile(user.id)

  const profileData = data?.mst_user_profileCollection?.edges[0]?.node

  if (!profileData) {
    return <div>No profile found</div>
  }

  const userProfile = {
    ...profileData,
    email: user.email!,
    createdDate: convertToJST(profileData?.created_at),
  }

  return <ProfileForm userProfile={userProfile} />
}
