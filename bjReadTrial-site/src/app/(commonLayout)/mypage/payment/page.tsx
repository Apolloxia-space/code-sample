"use client"
import { Box, Text, Button, useToast } from "@chakra-ui/react"
import { useGetBillingPortalLink } from "./domain/hooks/useGetBillingPortalLink"
import { useRouter } from "next/navigation"

const PaymentPage = () => {
  const { isLoadingPortalLink, isError, mutate } = useGetBillingPortalLink()
  const router = useRouter()
  const toast = useToast()

  const handleRedirectToCustomerPortal = () => {
    mutate(null, {
      onSuccess: (data) => {
        router.push(data.url)
      },
      onError: () => {
        toast({
          title: "問題が発生しました",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      },
    })
  }

  return (
    <Box>
      <Text>プランの変更</Text>
      <Button
        isLoading={isLoadingPortalLink}
        isDisabled={isError}
        onClick={handleRedirectToCustomerPortal}>
        プランを変更する
      </Button>
    </Box>
  )
}

export default PaymentPage
