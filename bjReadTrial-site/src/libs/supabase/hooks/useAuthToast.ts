import { useToast } from "@chakra-ui/react"
export const useAuthToast = (mode: string) => {
  const toast = useToast()
  const authToast = (statusCode: number) => {
    if (mode === "signIn") {
      switch (statusCode) {
        case 400:
          toast({
            title: "メールアドレスまたはパスワードが間違っています",
            status: "error",
            duration: 5000,
          })
          return
        case 403:
          toast({
            title: "メールアドレスが未認証です",
            status: "error",
            duration: 5000,
          })
          return
        case 500:
          toast({
            title: "時間をおいてもう一度お試しください",
            status: "error",
            duration: 5000,
          })
          return
        default:
          toast({
            title: "ログインしました",
            status: "success",
            duration: 5000,
          })
          return
      }
    } else if (mode === "signOut") {
      switch (statusCode) {
        case 200:
          toast({
            title: "ログアウトしました",
            status: "success",
            duration: 5000,
          })
          return
        default:
          toast({
            title: "時間をおいてもう一度お試しください",
            status: "error",
            duration: 5000,
          })
          return
      }
    } else if (mode === "delete") {
      switch (statusCode) {
        case 200:
          toast({
            title: "アカウントを削除しました",
            status: "success",
            duration: 5000,
          })
          return
        default:
          toast({
            title: "時間をおいてもう一度お試しください",
            status: "error",
            duration: 5000,
          })
          return
      }
    }
  }
  return authToast
}
