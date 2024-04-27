import { HStack, Text, Box } from "@chakra-ui/react"
import { FC } from "react"
import Link from "next/link"

type Footer = {}

export const Footer: FC<Footer> = () => {
  return (
    <Box
      backgroundColor="primary"
      height={"100px"}
      padding="20px 30px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      position="relative">
      <Box position="absolute" bottom="20px">
        <HStack spacing="20px">
          <Link href="/faq">
            <Text fontSize="xs">FAQ</Text>
          </Link>
          {/* <Link href="/">
            <Text>個人情報の取り扱いについて</Text>
          </Link> */}
          <Link href="/asct">
            <Text fontSize="xs">特定商取引法に基づく表記</Text>
          </Link>
        </HStack>
        <Text fontSize="xx-small" textAlign="center">
          ©Copyright 2024 apolloxia All Rights Reserved
        </Text>
      </Box>
    </Box>
  )
}
