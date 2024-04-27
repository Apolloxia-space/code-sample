import { Box, Heading } from "@chakra-ui/react"
import { getNewsDetail } from "src/infra/contentful/repositories/news"
import { RichText } from "src/common/components/RichText/RichText"

type Props = { newsId: string }

export const NewsDetail: React.FC<Props> = async ({ newsId }) => {
  const news = await getNewsDetail(newsId)
  return (
    <Box
      paddingX={["5px", "30px"]}
      paddingY={["20px", "30px"]}
      borderRadius={["5px", "10px"]}
      margin={"0 auto"}>
      <Heading
        paddingBottom={["10px", "20px"]}
        borderBottom="2px dotted "
        borderColor={"primary"}>
        {news?.title}
      </Heading>
      <RichText
        content={news?.body?.json}
        assetsData={news?.body?.links?.assets.block}
        blockProps={{
          marginTop: ["6", "16"],
        }}
      />
    </Box>
  )
}
