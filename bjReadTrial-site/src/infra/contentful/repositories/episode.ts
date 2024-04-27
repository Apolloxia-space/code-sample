import {
  GetEpisodeDocument,
  GetEpisodeArchiveDocument,
} from "src/infra/contentful/generated/graphql"
import { contentfulClient } from "src/libs/contentful/api/contentfulClient"
import { Episode, EpisodeArchive } from "src/infra/contentful/entities/episode"
import { FC_ENV } from "src/copied/fcEnv"

export const getEpisodeArchive = async (): Promise<EpisodeArchive> => {
  const variables = {
    tag: FC_ENV.CONTENTFUL_TAGS,
  }
  const data = await contentfulClient.request(
    GetEpisodeArchiveDocument,
    variables,
  )

  return data.episodeCollection
}

export const getEpisode = async (episodeId: string): Promise<Episode> => {
  const variables = {
    episodeId: episodeId,
  }

  const data = await contentfulClient.request(GetEpisodeDocument, variables)

  return data.episode
}
