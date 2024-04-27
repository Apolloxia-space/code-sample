import { Suspense } from "react"
import { EpisodeDetail } from "src/app/(commonLayout)/episode/components/EpisodeDetail"
import { EpisodeArchive } from "src/app/(commonLayout)/episode/components/EpisodeArchive"
import { Box } from "@chakra-ui/react"

type EpisodePageParams = {
  params: { episodeId: string }
}

const EpisodePage = ({ params }: EpisodePageParams) => {
  return (
    <Box>
      <Suspense
        fallback={
          <Box height="100vh" width="100%">
            {""}
          </Box>
        }>
        <EpisodeDetail episodeId={params.episodeId} />
      </Suspense>
      <EpisodeArchive />
    </Box>
  )
}

export default EpisodePage
