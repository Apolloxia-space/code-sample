import { Box, Heading, Textarea } from "@chakra-ui/react"
import { getText } from "src/infra/contentful/repositories/text"

const AsctPage = async () => {
  const text = await getText("asct")

  return (
    <Box paddingX={["20px", "50px"]} textAlign="center">
      <Heading as="h1" marginBottom="20px" fontSize={["20px", "30px"]}>
        特定商取引法に基づく表記
      </Heading>
      <Textarea
        readOnly
        defaultValue={text!.items[0]!.description!}
        height="90vh"
      />
    </Box>
  )
}

export default AsctPage
