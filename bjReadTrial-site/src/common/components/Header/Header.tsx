"use client"
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { FC } from "react"
import { FC_ENV } from "src/copied/fcEnv"
// import { useAuthStatusStore } from "src/utils/auth/useAuthStatusStore"
import { LogoIcon } from "src/copied/themes/components/icons/LogoIcon"

type Header = { isTopPage?: boolean }

export const Header: FC<Header> = ({ isTopPage = false }) => {
  const headerList = FC_ENV["HEADER_LIST"].map((content) => {
    return { displayName: content["DISPLAYNAME"], link: content["LINK"] }
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const { isSignIned } = useAuthStatusStore()

  return (
    <HStack
      justifyContent="space-between"
      width="100%"
      height={["60px", "80px"]}
      top="-10px"
      position={isTopPage ? "absolute" : "relative"}>
      <Box>
        <Link href="/">
          <LogoIcon
            color="logoPrimary"
            height="100%"
            width={["140px", "240px", "340px"]}
            paddingLeft="20px"
          />
        </Link>
      </Box>
      <Box>
        {/* <HStack>
          {isSignIned ? (
            <Link href="/mypage">
              <Box>マイページ</Box>
            </Link>
          ) : (
            <>
              <Link href="/signIn">
                <Box>ログイン</Box>
              </Link>
              <Link href="/signUp">
                <Box>会員登録</Box>
              </Link>
            </>
          )}*/}
        <IconButton
          marginRight={["10px", "30px"]}
          fontSize="30px"
          icon={<HamburgerIcon width="50px" />}
          aria-label="メニューを開く"
          background="none"
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement="top" size="full" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            alignItems="center"
            paddingY={["30px", "40px"]}
            backgroundColor="primary">
            <DrawerCloseButton marginRight={["20px", "30px"]} fontSize="25px" />
            <DrawerHeader
              fontSize={["30px", "40px"]}
              marginBottom={["20px", "40px"]}
              color="textQuinary">
              MENU
            </DrawerHeader>
            <DrawerBody>
              {headerList.map((content, index) => {
                return (
                  <Link key={index} href={content.link} onClick={onClose}>
                    <Text
                      fontSize={["15px", "25px"]}
                      textAlign="center"
                      fontWeight="500"
                      padding={["10px", "15px"]}
                      color="textQuinary">
                      {content.displayName}
                    </Text>
                  </Link>
                )
              })}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        {/* </HStack> */}
      </Box>
    </HStack>
  )
}
