import {
  Box,
  VStack,
  Image,
  Text,
  HStack,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"
import { getEpisodeArchive } from "src/infra/contentful/repositories/episode"
import { formatDate } from "src/libs/contentful/utils/formatData"

type EpisodeArchiveProps = {}

export const EpisodeArchive: React.FC<EpisodeArchiveProps> = async () => {
  const episodeArchive = await getEpisodeArchive()

  return (
    <Box>
      {episodeArchive && (
        <UnorderedList spacing={0} listStyleType="none" m={0} paddingX={4}>
          {episodeArchive.items.map((item, index) => {
            if (!item || !item.thumbnail || !item.title) return null

            const formattedDate = formatDate(item.publishTime)

            return (
              <ListItem key={item.sys.id}>
                <Link
                  href={`/episode/${item.sys.id}`}
                  _hover={{ textDecoration: "none" }}>
                  <HStack
                    cursor="pointer"
                    py={1}
                    spacing={4}
                    borderRight={"none"}
                    borderLeft={"none"}
                    borderTop={index === 0 ? "1px solid" : "none"}
                    borderBottom="1px solid"
                    borderColor={"gray.100"}
                    borderWidth={1}
                    minWidth={{ base: "100%", sm: "320px" }}
                    _hover={{ backgroundColor: "gray.100" }}>
                    <Image
                      src={item.thumbnail.url!}
                      alt={item.title}
                      mr={3}
                      width={{ base: "140px", sm: "160px" }}
                      height={{ base: "70px", sm: "80px" }}
                      minWidth={{ base: "140px", sm: "160px" }}
                      minHeight={{ base: "70px", sm: "80px" }}
                      objectFit="cover"
                      background="gray.300"
                    />
                    <VStack align="start">
                      <Text fontSize="sm" color="gray.500">
                        {formattedDate}
                      </Text>
                      <Text fontWeight="medium">{item.title}</Text>
                    </VStack>
                  </HStack>
                </Link>
              </ListItem>
            )
          })}
        </UnorderedList>
      )}
    </Box>
  )
}
