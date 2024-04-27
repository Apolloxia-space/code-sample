import { Box, Button, HStack, Link, Text } from "@chakra-ui/react"

type PaginationProps = {
  currentPage: number
  totalPageCount: number
  baseUrl: string
  categoryId?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPageCount,
  baseUrl,
  categoryId,
}) => {
  const urlBase = categoryId ? `${baseUrl}/${categoryId}` : baseUrl

  return (
    <HStack justifyContent="center" marginX="auto" marginBottom={5}>
      {/* 最初へボタン */}
      <Link href={`${urlBase}/1`}>
        <Button isDisabled={currentPage === 1} size={["sm", "md"]}>
          最初
        </Button>
      </Link>

      {/* 前へボタン */}
      <Link href={`${urlBase}/${currentPage - 1}`}>
        <Button isDisabled={currentPage === 1} size={["sm", "md"]}>
          前へ
        </Button>
      </Link>

      {/* 現在のページと総ページ数（常に中央に配置） */}
      <Box>
        <Text
          fontSize={["md", "lg"]}>{`${currentPage} / ${totalPageCount}`}</Text>
      </Box>

      {/* 次へボタン */}
      <Link href={`${urlBase}/${currentPage + 1}`}>
        <Button isDisabled={currentPage === totalPageCount} size={["sm", "md"]}>
          次へ
        </Button>
      </Link>

      {/* 最後へボタン */}
      <Link href={`${urlBase}/${totalPageCount}`}>
        <Button isDisabled={currentPage === totalPageCount} size={["sm", "md"]}>
          最後
        </Button>
      </Link>
    </HStack>
  )
}
