import {
  HStack,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import { Suspense } from "react"
import { ContentsContainer } from "src/common/components/ContentsContainer/ContentsContainer"
import { Pagination } from "src/common/components/Pagenation/Pagenation"
import { NewsCategoryItem, NewsItem } from "src/infra/contentful/entities/news"
import {
  getNews,
  getNewsCategory,
} from "src/infra/contentful/repositories/news"
import { formatDate } from "src/libs/contentful/utils/formatData"

type NewsPageParams = {
  params: { newsCategory: string; pageNo: string }
}

const CONTENT_NUM = 7 //一ページに表示する記事数

const NewsPage = async ({ params }: NewsPageParams) => {
  const { newsCategory: categoryId, pageNo } = params
  const currentPage = parseInt(pageNo)
  const skipContentNum = (currentPage - 1) * CONTENT_NUM
  const newsData = await getNews({
    categoryId,
    skip: skipContentNum,
    limit: CONTENT_NUM,
  })
  if (!newsData) {
    return null
  }
  const newsCategory = await getNewsCategory()

  // 総ページ数の計算
  const totalPageCount = Math.ceil(newsData.total / CONTENT_NUM)

  if (!newsData) {
    return null
  }

  return (
    <VStack align="stretch" spacing={4} margin={"0 auto"}>
      <Heading
        as="h1"
        width="100%"
        marginBottom={[0, 3]}
        textAlign="center"
        size={["xl", "2xl"]}
        letterSpacing={"+.1rem"}
        color="primary">
        NEWS
      </Heading>
      <ContentsContainer>
        <HStack flexWrap="wrap" maxWidth="800px" margin={"0 auto 20px"}>
          <Link key="all" href="/news/all/1">
            <Text
              width={20}
              paddingY={["5px", "8px"]}
              whiteSpace={"nowrap"}
              fontSize={"xs"}
              fontWeight={"bold"}
              border={"2px solid"}
              borderColor={"primary"}
              borderRadius={"full"}
              color="textPrimary"
              textAlign={"center"}
              _hover={{ background: "primary", color: "white" }}
              cursor="pointer">
              All
            </Text>
          </Link>
          {newsCategory &&
            newsCategory.items.map((category: NewsCategoryItem) => {
              if (!category) return null
              return (
                <Link key={category.sys.id} href={`/news/${category.sys.id}/1`}>
                  <Text
                    minWidth={20}
                    padding={["5px 10px", "8px 13px"]}
                    whiteSpace={"nowrap"}
                    fontSize={"xs"}
                    fontWeight={"bold"}
                    border={"2px solid"}
                    borderColor={"primary"}
                    borderRadius={"full"}
                    color="textPrimary"
                    _hover={{ background: "primary", color: "white" }}
                    cursor="pointer">
                    {category.displayName}
                  </Text>
                </Link>
              )
            })}
        </HStack>
        <Suspense>
          <UnorderedList
            maxWidth="800px"
            styleType={"none"}
            margin={"0 auto"}
            backgroundColor={"white"}
            marginBottom={10}>
            {newsData.items.map((news: NewsItem) => {
              if (!news) return null
              return (
                <Link key={news.sys.id} href={`/news/detail/${news.sys.id}`}>
                  <ListItem
                    padding={["20px 5px 15px 5px", "20px 10px 15px 10px"]}
                    borderBottom={"1px solid"}
                    borderColor={"primary"}
                    _hover={{ background: "gray.50" }}>
                    <Text fontSize={"small"}>
                      {formatDate(news?.publishTime)}
                    </Text>
                    <Text
                      color="textPrimary"
                      fontSize={["small", "medium"]}
                      fontWeight={"semibold"}>
                      {news?.title}
                    </Text>
                  </ListItem>
                </Link>
              )
            })}
          </UnorderedList>
        </Suspense>
        <Pagination
          currentPage={currentPage}
          totalPageCount={totalPageCount}
          baseUrl="/news"
          categoryId={categoryId}
        />
      </ContentsContainer>
    </VStack>
  )
}

export default NewsPage
