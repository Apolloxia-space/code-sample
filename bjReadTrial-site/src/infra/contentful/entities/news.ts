import {
  GetNewsQuery,
  GetNewsDetailQuery,
  GetNewsCategoryQuery,
  GetNewsQueryVariables,
} from "src/infra/contentful/generated/graphql"

export type News = GetNewsQuery["newsCollection"]

export type GetNewsProps = Omit<GetNewsQueryVariables, "currentTime" | "tag"> &
  Partial<Pick<GetNewsQueryVariables, "currentTime">>

export type NewsItem = NonNullable<NonNullable<News>["items"]>[0]

export type NewsDetail = GetNewsDetailQuery["news"]

export type NewsCategory = GetNewsCategoryQuery["newsCategoryCollection"]

export type NewsCategoryItem = NonNullable<
  NonNullable<NewsCategory>["items"]
>[0]
