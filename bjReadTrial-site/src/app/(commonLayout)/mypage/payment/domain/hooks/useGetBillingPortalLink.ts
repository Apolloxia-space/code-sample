"use client"
import { useMutation } from "@tanstack/react-query"

type Data = { url: string }

type Error = { code: string }

type Variables = null

export const useGetBillingPortalLink = () => {
  const {
    isPending: isLoadingPortalLink,
    mutate,
    isError,
  } = useMutation<Data, Error, Variables>({
    mutationFn: async () => {
      const result = await fetch("/api/payment/create-portal-link", {
        method: "POST",
      })
      return result.json()
    },
  })

  return { isLoadingPortalLink, mutate, isError }
}
