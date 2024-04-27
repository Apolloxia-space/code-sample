import { Box, Text, Badge, Heading, Flex } from "@chakra-ui/react"
import { getNews } from "src/infra/contentful/repositories/news"
import { formatDate } from "src/libs/contentful/utils/formatData"
import Link from "next/link"

export const TopNewsSection: React.FC = async () => {
  const news = await getNews({ categoryId: "all", skip: 0, limit: 3 })
  const newsList =
    news &&
    news.items.map((newsItem) => {
      return {
        newsTitle: newsItem?.title,
        newsId: newsItem?.sys.id,
        publishDate: formatDate(newsItem?.publishTime),
      }
    })
  return (
    <Flex maxWidth="800px" margin="0 auto 70px" flexDirection="column">
      <Heading
        as="h1"
        color="textPrimary"
        textAlign="center"
        marginBottom="20px">
        NEWS
      </Heading>
      <Flex textAlign="start">
        {newsList?.map((news) => {
          return (
            <Box
              key={news.newsId}
              borderBottom="1px solid"
              borderColor="secondary"
              width="100%"
              marginBottom="10px">
              <Link href={`/news/detail/${news.newsId}`}>
                <Box marginLeft="10px">
                  <Badge>{news.publishDate}</Badge>
                  <Text paddingBottom="10px">{news.newsTitle}</Text>
                </Box>
              </Link>
            </Box>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default TopNewsSection
