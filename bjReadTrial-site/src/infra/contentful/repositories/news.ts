import {
  GetNewsCategoryDocument,
  GetNewsDetailDocument,
  GetNewsDocument,
} from "src/infra/contentful/generated/graphql"
import { FC_ENV } from "src/copied/fcEnv"
import { contentfulClient } from "src/libs/contentful/api/contentfulClient"
import {
  News,
  NewsCategory,
  NewsDetail,
  GetNewsProps,
} from "src/infra/contentful/entities/news"
import { getCurrentTime } from "src/libs/contentful/utils/getCurrentTime"

export const getNews = async ({
  categoryId,
  skip = 0,
  limit,
  currentTime = getCurrentTime(),
}: GetNewsProps): Promise<News> => {
  let variables
  switch (categoryId) {
    case "all":
      variables = {
        categoryId: null,
        skip: skip,
        limit: limit,
        currentTime: currentTime, //公開日が先のものは取得しない
        tag: FC_ENV.CONTENTFUL_TAGS,
      }
      break
    default:
      variables = {
        categoryId: categoryId,
        skip: skip,
        limit: limit,
        currentTime: currentTime,
        tag: FC_ENV.CONTENTFUL_TAGS,
      }
      break
  }

  const data = await contentfulClient.request(GetNewsDocument, variables)

  return data.newsCollection
}

export const getNewsDetail = async (newsId: string): Promise<NewsDetail> => {
  const variables = {
    newsId: newsId,
    tag: FC_ENV.CONTENTFUL_TAGS,
  }

  const data = await contentfulClient.request(GetNewsDetailDocument, variables)

  return data.news
}

export const getNewsCategory = async (): Promise<NewsCategory> => {
  const variables = {
    tag: FC_ENV.CONTENTFUL_TAGS,
  }
  const data = await contentfulClient.request(
    GetNewsCategoryDocument,
    variables,
  )

  return data.newsCategoryCollection
}
