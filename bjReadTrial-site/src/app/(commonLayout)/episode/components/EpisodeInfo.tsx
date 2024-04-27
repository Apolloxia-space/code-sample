import { Box, Text } from "@chakra-ui/react"
import { Episode } from "src/infra/contentful/entities/episode"
import { formatDate } from "src/libs/contentful/utils/formatData"

type Props = { episode: Episode }

export const EpisodeInfo: React.FC<Props> = ({ episode }) => {
  return (
    <Box p={4} borderBottom="3px solid" mb={10}>
      <Text fontSize="2xl" fontWeight="bold">
        {episode?.title}
      </Text>
      <Text fontSize="sm">{formatDate(episode?.publishTime)}</Text>
    </Box>
  )
}
