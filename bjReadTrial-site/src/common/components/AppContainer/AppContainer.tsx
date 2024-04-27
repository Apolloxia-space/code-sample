import { Box, Flex } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import { Header } from "src/common/components/Header/Header"
import { Footer } from "src/common/components/Footer/Footer"

type AppContainerProps = {
  children: ReactNode
  isTopPage?: boolean
}

export const AppContainer: FC<AppContainerProps> = ({
  children,
  isTopPage = false,
}) => {
  return (
    <Flex
      fontFamily={"body"}
      flexFlow="column"
      position="relative"
      maxWidth="2000px"
      margin="auto">
      <Header isTopPage={isTopPage} />
      <Box minHeight="100vh">{children}</Box>
      <Footer />
    </Flex>
  )
}
