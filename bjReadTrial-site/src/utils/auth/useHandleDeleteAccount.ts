import { useRouter } from "next/navigation"
import { useDeleteAccount } from "src/utils/auth/useDeleteAccount"
import { useAuthStatusStore } from "src/utils/auth/useAuthStatusStore"
import { useAuthToast } from "src/libs/supabase/hooks/useAuthToast"

export const useHandleDeleteAccount = () => {
  const router = useRouter()
  const { isAccountClosing, mutate } = useDeleteAccount()
  const { logout } = useAuthStatusStore()
  const authToast = useAuthToast("delete")

  const handleDeleteAccount = async () => {
    mutate(null, {
      onSuccess: async () => {
        authToast(200)
        await logout()
        router.push("/")
      },
      onError: () => {
        authToast(403)
      },
    })
  }
  return { isAccountClosing, handleDeleteAccount }
}
