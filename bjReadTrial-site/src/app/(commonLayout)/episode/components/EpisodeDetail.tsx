import { EpisodeViewer } from "src/app/(commonLayout)/episode/components/EpisodeViewer"
import { Box } from "@chakra-ui/react"
import { getEpisode } from "src/infra/contentful/repositories/episode"
import { EpisodeInfo } from "src/app/(commonLayout)/episode/components/EpisodeInfo"

type ComicDetailProps = {
  episodeId: string
}

export const EpisodeDetail: React.FC<ComicDetailProps> = async ({
  episodeId,
}) => {
  const episode = await getEpisode(episodeId)

  return (
    <Box>
      <EpisodeViewer episode={episode} />
      <EpisodeInfo episode={episode} />
    </Box>
  )
}
