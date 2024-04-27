import { useMutation } from "@tanstack/react-query"

type Data = { status: number }

type Error = { code: string }

type Variables = null

export const useDeleteAccount = () => {
  const { isPending: isAccountClosing, mutate } = useMutation<
    Data,
    Error,
    Variables
  >({
    mutationFn: async () => {
      return await fetch("/api/account/close", { method: "DELETE" })
    },
  })
  return { isAccountClosing, mutate }
}
