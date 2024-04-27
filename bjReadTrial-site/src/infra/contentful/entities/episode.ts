import {
  GetEpisodeQuery,
  GetEpisodeArchiveQuery,
} from "src/infra/contentful/generated/graphql"

export type Episode = GetEpisodeQuery["episode"]

export type EpisodeArchive = GetEpisodeArchiveQuery["episodeCollection"]
