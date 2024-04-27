/* eslint-disable */
import * as types from "./graphql"
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "query getEpisode($episodeId: String!) {\n  episode(id: $episodeId) {\n    sys {\n      id\n    }\n    title\n    thumbnail {\n      url\n    }\n    illustsCollection(limit: 100) {\n      items {\n        url\n      }\n    }\n    publishTime\n    unpublishTime\n  }\n}\n\nquery getEpisodeArchive($tag: String) {\n  episodeCollection(\n    limit: 100\n    order: publishTime_DESC\n    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n  ) {\n    items {\n      sys {\n        id\n      }\n      title\n      thumbnail {\n        url\n      }\n      publishTime\n      unpublishTime\n    }\n  }\n}":
    types.GetEpisodeDocument,
  "query getImage($displayName: String!) {\n  imageCollection(where: {displayName: $displayName}) {\n    items {\n      displayName\n      image {\n        url\n        width\n        height\n      }\n    }\n  }\n}":
    types.GetImageDocument,
  "query getNews($categoryId: String, $skip: Int!, $limit: Int!, $currentTime: DateTime, $tag: String!) {\n  newsCollection(\n    limit: $limit\n    skip: $skip\n    order: publishTime_DESC\n    where: {newsCategory: {sys: {id: $categoryId}}, publishTime_lte: $currentTime, contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n  ) {\n    total\n    items {\n      sys {\n        id\n      }\n      title\n      newsCategory {\n        sys {\n          id\n        }\n        displayName\n      }\n      publishTime\n      unpublishTime\n    }\n  }\n}\n\nquery getNewsDetail($newsId: String!) {\n  news(id: $newsId) {\n    sys {\n      id\n    }\n    title\n    body {\n      json\n      links {\n        assets {\n          block {\n            sys {\n              id\n            }\n            contentfulMetadata {\n              tags {\n                id\n              }\n            }\n            title\n            description\n            contentType\n            fileName\n            size\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n    newsCategory {\n      sys {\n        id\n      }\n      displayName\n    }\n    publishTime\n    unpublishTime\n  }\n}\n\nquery getNewsCategory($tag: String!) {\n  newsCategoryCollection(\n    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n    order: displayOrder_ASC\n  ) {\n    items {\n      sys {\n        id\n      }\n      displayName\n      displayOrder\n    }\n  }\n}":
    types.GetNewsDocument,
  "query getQuestionGroup {\n  questionGroupCollection(order: displayOrder_ASC) {\n    items {\n      sys {\n        id\n      }\n      displayName\n      questionCollection {\n        items {\n          question\n          answer {\n            json\n          }\n        }\n      }\n    }\n  }\n}":
    types.GetQuestionGroupDocument,
  "query getSubscriptionPlans($tag: String!) {\n  subscriptionPlansCollection(\n    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n  ) {\n    items {\n      sys {\n        id\n      }\n      displayName\n      displayOrder\n      planId\n      price\n      membershipName\n    }\n  }\n}":
    types.GetSubscriptionPlansDocument,
  "query getText($displayName: String!) {\n  textCollection(where: {displayName: $displayName}) {\n    items {\n      displayName\n      description\n    }\n  }\n}":
    types.GetTextDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getEpisode($episodeId: String!) {\n  episode(id: $episodeId) {\n    sys {\n      id\n    }\n    title\n    thumbnail {\n      url\n    }\n    illustsCollection(limit: 100) {\n      items {\n        url\n      }\n    }\n    publishTime\n    unpublishTime\n  }\n}\n\nquery getEpisodeArchive($tag: String) {\n  episodeCollection(\n    limit: 100\n    order: publishTime_DESC\n    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n  ) {\n    items {\n      sys {\n        id\n      }\n      title\n      thumbnail {\n        url\n      }\n      publishTime\n      unpublishTime\n    }\n  }\n}",
): (typeof documents)["query getEpisode($episodeId: String!) {\n  episode(id: $episodeId) {\n    sys {\n      id\n    }\n    title\n    thumbnail {\n      url\n    }\n    illustsCollection(limit: 100) {\n      items {\n        url\n      }\n    }\n    publishTime\n    unpublishTime\n  }\n}\n\nquery getEpisodeArchive($tag: String) {\n  episodeCollection(\n    limit: 100\n    order: publishTime_DESC\n    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n  ) {\n    items {\n      sys {\n        id\n      }\n      title\n      thumbnail {\n        url\n      }\n      publishTime\n      unpublishTime\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getImage($displayName: String!) {\n  imageCollection(where: {displayName: $displayName}) {\n    items {\n      displayName\n      image {\n        url\n        width\n        height\n      }\n    }\n  }\n}",
): (typeof documents)["query getImage($displayName: String!) {\n  imageCollection(where: {displayName: $displayName}) {\n    items {\n      displayName\n      image {\n        url\n        width\n        height\n      }\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getNews($categoryId: String, $skip: Int!, $limit: Int!, $currentTime: DateTime, $tag: String!) {\n  newsCollection(\n    limit: $limit\n    skip: $skip\n    order: publishTime_DESC\n    where: {newsCategory: {sys: {id: $categoryId}}, publishTime_lte: $currentTime, contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n  ) {\n    total\n    items {\n      sys {\n        id\n      }\n      title\n      newsCategory {\n        sys {\n          id\n        }\n        displayName\n      }\n      publishTime\n      unpublishTime\n    }\n  }\n}\n\nquery getNewsDetail($newsId: String!) {\n  news(id: $newsId) {\n    sys {\n      id\n    }\n    title\n    body {\n      json\n      links {\n        assets {\n          block {\n            sys {\n              id\n            }\n            contentfulMetadata {\n              tags {\n                id\n              }\n            }\n            title\n            description\n            contentType\n            fileName\n            size\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n    newsCategory {\n      sys {\n        id\n      }\n      displayName\n    }\n    publishTime\n    unpublishTime\n  }\n}\n\nquery getNewsCategory($tag: String!) {\n  newsCategoryCollection(\n    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n    order: displayOrder_ASC\n  ) {\n    items {\n      sys {\n        id\n      }\n      displayName\n      displayOrder\n    }\n  }\n}",
): (typeof documents)["query getNews($categoryId: String, $skip: Int!, $limit: Int!, $currentTime: DateTime, $tag: String!) {\n  newsCollection(\n    limit: $limit\n    skip: $skip\n    order: publishTime_DESC\n    where: {newsCategory: {sys: {id: $categoryId}}, publishTime_lte: $currentTime, contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n  ) {\n    total\n    items {\n      sys {\n        id\n      }\n      title\n      newsCategory {\n        sys {\n          id\n        }\n        displayName\n      }\n      publishTime\n      unpublishTime\n    }\n  }\n}\n\nquery getNewsDetail($newsId: String!) {\n  news(id: $newsId) {\n    sys {\n      id\n    }\n    title\n    body {\n      json\n      links {\n        assets {\n          block {\n            sys {\n              id\n            }\n            contentfulMetadata {\n              tags {\n                id\n              }\n            }\n            title\n            description\n            contentType\n            fileName\n            size\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n    newsCategory {\n      sys {\n        id\n      }\n      displayName\n    }\n    publishTime\n    unpublishTime\n  }\n}\n\nquery getNewsCategory($tag: String!) {\n  newsCategoryCollection(\n    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n    order: displayOrder_ASC\n  ) {\n    items {\n      sys {\n        id\n      }\n      displayName\n      displayOrder\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getQuestionGroup {\n  questionGroupCollection(order: displayOrder_ASC) {\n    items {\n      sys {\n        id\n      }\n      displayName\n      questionCollection {\n        items {\n          question\n          answer {\n            json\n          }\n        }\n      }\n    }\n  }\n}",
): (typeof documents)["query getQuestionGroup {\n  questionGroupCollection(order: displayOrder_ASC) {\n    items {\n      sys {\n        id\n      }\n      displayName\n      questionCollection {\n        items {\n          question\n          answer {\n            json\n          }\n        }\n      }\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getSubscriptionPlans($tag: String!) {\n  subscriptionPlansCollection(\n    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n  ) {\n    items {\n      sys {\n        id\n      }\n      displayName\n      displayOrder\n      planId\n      price\n      membershipName\n    }\n  }\n}",
): (typeof documents)["query getSubscriptionPlans($tag: String!) {\n  subscriptionPlansCollection(\n    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: [$tag]}}}\n  ) {\n    items {\n      sys {\n        id\n      }\n      displayName\n      displayOrder\n      planId\n      price\n      membershipName\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getText($displayName: String!) {\n  textCollection(where: {displayName: $displayName}) {\n    items {\n      displayName\n      description\n    }\n  }\n}",
): (typeof documents)["query getText($displayName: String!) {\n  textCollection(where: {displayName: $displayName}) {\n    items {\n      displayName\n      description\n    }\n  }\n}"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
