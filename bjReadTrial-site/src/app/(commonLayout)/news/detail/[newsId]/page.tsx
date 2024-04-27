import { Suspense } from "react"
import { Box } from "@chakra-ui/react"
import { NewsDetail } from "src/app/(commonLayout)/news/detail/components/NewsDetail"
import { ContentsContainer } from "src/common/components/ContentsContainer/ContentsContainer"

type NewsPageParams = {
  params: { newsId: string }
}

const NewsDetailPage = ({ params }: NewsPageParams) => {
  return (
    <Box width={"90%"} marginX={"auto"} maxWidth="900px">
      <ContentsContainer>
        <Suspense fallback="ロードしています">
          <NewsDetail newsId={params.newsId} />
        </Suspense>
      </ContentsContainer>
    </Box>
  )
}

export default NewsDetailPage
