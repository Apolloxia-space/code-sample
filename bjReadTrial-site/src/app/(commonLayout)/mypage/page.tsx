"use client"
import { VStack, Box, useDisclosure } from "@chakra-ui/react"
import Link from "next/link"
import { SignOutModal } from "./components/SignOut"
import { useAuthStatusStore } from "src/utils/auth/useAuthStatusStore"
import { useAuthToast } from "src/libs/supabase/hooks/useAuthToast"
import { useRouter } from "next/navigation"

const Mypage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logout } = useAuthStatusStore()
  const router = useRouter()
  const authToast = useAuthToast("signOut")

  const handleClickSignOut = async () => {
    const { statusCode } = await logout()
    authToast(statusCode!)
    router.push("/")
    onClose()
  }

  const listItemStyle = {
    borderBottom: "1px solid black",
    padding: "50px 20px 20px",
    margin: "10px auto",
    width: ["300px", "500px"],
    cursor: "pointer",
  }

  const listStyle = {
    paddingY: "50px",
    spacing: "20px",
  }

  return (
    <VStack textAlign="center" {...listStyle}>
      <Link href="/mypage/profile">
        <Box {...listItemStyle}>アカウント情報の確認・変更</Box>
      </Link>
      <Box {...listItemStyle} as="button" onClick={onOpen}>
        サインアウト
      </Box>
      <SignOutModal
        isOpen={isOpen}
        handleClickSignOut={handleClickSignOut}
        onClose={onClose}
      />
      <Link href="/account/close">
        <Box {...listItemStyle}>退会</Box>
      </Link>
    </VStack>
  )
}
export default Mypage
