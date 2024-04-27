import { Box } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

type ContentsContainerProps = {
  children: ReactNode
}

export const ContentsContainer: FC<ContentsContainerProps> = ({ children }) => {
  return (
    <Box
      width="100%"
      maxWidth="1400px"
      marginX="auto"
      marginY={["20px", "30px"]}
      paddingX={["5px", "100px"]}
      paddingY={["20px", "30px"]}
      background={"backgroundPrimary"}>
      {children}
    </Box>
  )
}
