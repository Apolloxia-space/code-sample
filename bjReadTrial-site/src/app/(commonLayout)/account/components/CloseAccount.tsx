"use client"
import { Button, Flex } from "@chakra-ui/react"
import { useHandleDeleteAccount } from "../../../../utils/auth/useHandleDeleteAccount"

export const CloseAccount: React.FC = () => {
  const { isAccountClosing, handleDeleteAccount } = useHandleDeleteAccount()

  return (
    <Flex justifyContent="center" alignItems="center" marginBottom="80px">
      <Button isLoading={isAccountClosing} onClick={handleDeleteAccount}>
        アカウントを閉鎖する
      </Button>
    </Flex>
  )
}
