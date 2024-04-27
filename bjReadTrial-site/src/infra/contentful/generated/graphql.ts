/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any }
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  contentType: Maybe<Scalars["String"]["output"]>
  contentfulMetadata: ContentfulMetadata
  description: Maybe<Scalars["String"]["output"]>
  fileName: Maybe<Scalars["String"]["output"]>
  height: Maybe<Scalars["Int"]["output"]>
  linkedFrom: Maybe<AssetLinkingCollections>
  size: Maybe<Scalars["Int"]["output"]>
  sys: Sys
  title: Maybe<Scalars["String"]["output"]>
  url: Maybe<Scalars["String"]["output"]>
  width: Maybe<Scalars["Int"]["output"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
  transform: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

export type AssetCollection = {
  items: Array<Maybe<Asset>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType: InputMaybe<Scalars["String"]["input"]>
  contentType_contains: InputMaybe<Scalars["String"]["input"]>
  contentType_exists: InputMaybe<Scalars["Boolean"]["input"]>
  contentType_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  contentType_not: InputMaybe<Scalars["String"]["input"]>
  contentType_not_contains: InputMaybe<Scalars["String"]["input"]>
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  description: InputMaybe<Scalars["String"]["input"]>
  description_contains: InputMaybe<Scalars["String"]["input"]>
  description_exists: InputMaybe<Scalars["Boolean"]["input"]>
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  description_not: InputMaybe<Scalars["String"]["input"]>
  description_not_contains: InputMaybe<Scalars["String"]["input"]>
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  fileName: InputMaybe<Scalars["String"]["input"]>
  fileName_contains: InputMaybe<Scalars["String"]["input"]>
  fileName_exists: InputMaybe<Scalars["Boolean"]["input"]>
  fileName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  fileName_not: InputMaybe<Scalars["String"]["input"]>
  fileName_not_contains: InputMaybe<Scalars["String"]["input"]>
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  height: InputMaybe<Scalars["Int"]["input"]>
  height_exists: InputMaybe<Scalars["Boolean"]["input"]>
  height_gt: InputMaybe<Scalars["Int"]["input"]>
  height_gte: InputMaybe<Scalars["Int"]["input"]>
  height_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  height_lt: InputMaybe<Scalars["Int"]["input"]>
  height_lte: InputMaybe<Scalars["Int"]["input"]>
  height_not: InputMaybe<Scalars["Int"]["input"]>
  height_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  size: InputMaybe<Scalars["Int"]["input"]>
  size_exists: InputMaybe<Scalars["Boolean"]["input"]>
  size_gt: InputMaybe<Scalars["Int"]["input"]>
  size_gte: InputMaybe<Scalars["Int"]["input"]>
  size_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  size_lt: InputMaybe<Scalars["Int"]["input"]>
  size_lte: InputMaybe<Scalars["Int"]["input"]>
  size_not: InputMaybe<Scalars["Int"]["input"]>
  size_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  sys: InputMaybe<SysFilter>
  title: InputMaybe<Scalars["String"]["input"]>
  title_contains: InputMaybe<Scalars["String"]["input"]>
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  title_not: InputMaybe<Scalars["String"]["input"]>
  title_not_contains: InputMaybe<Scalars["String"]["input"]>
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  url: InputMaybe<Scalars["String"]["input"]>
  url_contains: InputMaybe<Scalars["String"]["input"]>
  url_exists: InputMaybe<Scalars["Boolean"]["input"]>
  url_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  url_not: InputMaybe<Scalars["String"]["input"]>
  url_not_contains: InputMaybe<Scalars["String"]["input"]>
  url_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  width: InputMaybe<Scalars["Int"]["input"]>
  width_exists: InputMaybe<Scalars["Boolean"]["input"]>
  width_gt: InputMaybe<Scalars["Int"]["input"]>
  width_gte: InputMaybe<Scalars["Int"]["input"]>
  width_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  width_lt: InputMaybe<Scalars["Int"]["input"]>
  width_lte: InputMaybe<Scalars["Int"]["input"]>
  width_not: InputMaybe<Scalars["Int"]["input"]>
  width_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
}

export type AssetLinkingCollections = {
  entryCollection: Maybe<EntryCollection>
  episodeCollection: Maybe<EpisodeCollection>
  imageCollection: Maybe<ImageCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type AssetLinkingCollectionsEpisodeCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type AssetLinkingCollectionsImageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type ContentfulMetadata = {
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  id: Maybe<Scalars["String"]["output"]>
  name: Maybe<Scalars["String"]["output"]>
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  items: Array<Maybe<Entry>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  sys: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** コミックのエピソードを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/episode) */
export type Episode = Entry & {
  contentfulMetadata: ContentfulMetadata
  illustsCollection: Maybe<AssetCollection>
  linkedFrom: Maybe<EpisodeLinkingCollections>
  publishTime: Maybe<Scalars["DateTime"]["output"]>
  sys: Sys
  thumbnail: Maybe<Asset>
  title: Maybe<Scalars["String"]["output"]>
  unpublishTime: Maybe<Scalars["DateTime"]["output"]>
}

/** コミックのエピソードを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/episode) */
export type EpisodeIllustsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

/** コミックのエピソードを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/episode) */
export type EpisodeLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** コミックのエピソードを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/episode) */
export type EpisodePublishTimeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** コミックのエピソードを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/episode) */
export type EpisodeThumbnailArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

/** コミックのエピソードを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/episode) */
export type EpisodeTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** コミックのエピソードを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/episode) */
export type EpisodeUnpublishTimeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

export type EpisodeCollection = {
  items: Array<Maybe<Episode>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type EpisodeFilter = {
  AND: InputMaybe<Array<InputMaybe<EpisodeFilter>>>
  OR: InputMaybe<Array<InputMaybe<EpisodeFilter>>>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  illustsCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>
  publishTime: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_exists: InputMaybe<Scalars["Boolean"]["input"]>
  publishTime_gt: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_gte: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  publishTime_lt: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_lte: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_not: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >
  sys: InputMaybe<SysFilter>
  thumbnail_exists: InputMaybe<Scalars["Boolean"]["input"]>
  title: InputMaybe<Scalars["String"]["input"]>
  title_contains: InputMaybe<Scalars["String"]["input"]>
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  title_not: InputMaybe<Scalars["String"]["input"]>
  title_not_contains: InputMaybe<Scalars["String"]["input"]>
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  unpublishTime: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_exists: InputMaybe<Scalars["Boolean"]["input"]>
  unpublishTime_gt: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_gte: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  unpublishTime_lt: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_lte: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_not: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >
}

export type EpisodeLinkingCollections = {
  entryCollection: Maybe<EntryCollection>
}

export type EpisodeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum EpisodeOrder {
  PublishTimeAsc = "publishTime_ASC",
  PublishTimeDesc = "publishTime_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UnpublishTimeAsc = "unpublishTime_ASC",
  UnpublishTimeDesc = "unpublishTime_DESC",
}

/** LPなどの画像を提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/image) */
export type Image = Entry & {
  contentfulMetadata: ContentfulMetadata
  displayName: Maybe<Scalars["String"]["output"]>
  image: Maybe<Asset>
  linkedFrom: Maybe<ImageLinkingCollections>
  sys: Sys
}

/** LPなどの画像を提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/image) */
export type ImageDisplayNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** LPなどの画像を提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/image) */
export type ImageImageArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

/** LPなどの画像を提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/image) */
export type ImageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ImageCollection = {
  items: Array<Maybe<Image>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type ImageFilter = {
  AND: InputMaybe<Array<InputMaybe<ImageFilter>>>
  OR: InputMaybe<Array<InputMaybe<ImageFilter>>>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  displayName: InputMaybe<Scalars["String"]["input"]>
  displayName_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayName_not: InputMaybe<Scalars["String"]["input"]>
  displayName_not_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  image_exists: InputMaybe<Scalars["Boolean"]["input"]>
  sys: InputMaybe<SysFilter>
}

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export type ImageLinkingCollections = {
  entryCollection: Maybe<EntryCollection>
}

export type ImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum ImageOrder {
  DisplayNameAsc = "displayName_ASC",
  DisplayNameDesc = "displayName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars["HexColor"]["input"]>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars["Int"]["input"]>
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars["Dimension"]["input"]>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars["Quality"]["input"]>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars["Dimension"]["input"]>
}

/** newsの機能を提供するコンテンツ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/news) */
export type News = Entry & {
  body: Maybe<NewsBody>
  contentfulMetadata: ContentfulMetadata
  linkedFrom: Maybe<NewsLinkingCollections>
  newsCategory: Maybe<NewsCategory>
  publishTime: Maybe<Scalars["DateTime"]["output"]>
  sys: Sys
  title: Maybe<Scalars["String"]["output"]>
  unpublishTime: Maybe<Scalars["DateTime"]["output"]>
}

/** newsの機能を提供するコンテンツ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/news) */
export type NewsBodyArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** newsの機能を提供するコンテンツ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/news) */
export type NewsLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** newsの機能を提供するコンテンツ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/news) */
export type NewsNewsCategoryArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  where: InputMaybe<NewsCategoryFilter>
}

/** newsの機能を提供するコンテンツ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/news) */
export type NewsPublishTimeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** newsの機能を提供するコンテンツ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/news) */
export type NewsTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** newsの機能を提供するコンテンツ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/news) */
export type NewsUnpublishTimeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

export type NewsBody = {
  json: Scalars["JSON"]["output"]
  links: NewsBodyLinks
}

export type NewsBodyAssets = {
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type NewsBodyEntries = {
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type NewsBodyLinks = {
  assets: NewsBodyAssets
  entries: NewsBodyEntries
  resources: NewsBodyResources
}

export type NewsBodyResources = {
  block: Array<NewsBodyResourcesBlock>
  hyperlink: Array<NewsBodyResourcesHyperlink>
  inline: Array<NewsBodyResourcesInline>
}

export type NewsBodyResourcesBlock = ResourceLink & {
  sys: ResourceSys
}

export type NewsBodyResourcesHyperlink = ResourceLink & {
  sys: ResourceSys
}

export type NewsBodyResourcesInline = ResourceLink & {
  sys: ResourceSys
}

/** newsのカテゴリ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/newsCategory) */
export type NewsCategory = Entry & {
  contentfulMetadata: ContentfulMetadata
  displayName: Maybe<Scalars["String"]["output"]>
  displayOrder: Maybe<Scalars["Int"]["output"]>
  linkedFrom: Maybe<NewsCategoryLinkingCollections>
  sys: Sys
}

/** newsのカテゴリ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/newsCategory) */
export type NewsCategoryDisplayNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** newsのカテゴリ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/newsCategory) */
export type NewsCategoryDisplayOrderArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** newsのカテゴリ [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/newsCategory) */
export type NewsCategoryLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type NewsCategoryCollection = {
  items: Array<Maybe<NewsCategory>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type NewsCategoryFilter = {
  AND: InputMaybe<Array<InputMaybe<NewsCategoryFilter>>>
  OR: InputMaybe<Array<InputMaybe<NewsCategoryFilter>>>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  displayName: InputMaybe<Scalars["String"]["input"]>
  displayName_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayName_not: InputMaybe<Scalars["String"]["input"]>
  displayName_not_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayOrder: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayOrder_gt: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_gte: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  displayOrder_lt: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_lte: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_not: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  sys: InputMaybe<SysFilter>
}

export type NewsCategoryLinkingCollections = {
  entryCollection: Maybe<EntryCollection>
  newsCollection: Maybe<NewsCollection>
}

export type NewsCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type NewsCategoryLinkingCollectionsNewsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<
    Array<InputMaybe<NewsCategoryLinkingCollectionsNewsCollectionOrder>>
  >
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum NewsCategoryLinkingCollectionsNewsCollectionOrder {
  PublishTimeAsc = "publishTime_ASC",
  PublishTimeDesc = "publishTime_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UnpublishTimeAsc = "unpublishTime_ASC",
  UnpublishTimeDesc = "unpublishTime_DESC",
}

export enum NewsCategoryOrder {
  DisplayNameAsc = "displayName_ASC",
  DisplayNameDesc = "displayName_DESC",
  DisplayOrderAsc = "displayOrder_ASC",
  DisplayOrderDesc = "displayOrder_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type NewsCollection = {
  items: Array<Maybe<News>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type NewsFilter = {
  AND: InputMaybe<Array<InputMaybe<NewsFilter>>>
  OR: InputMaybe<Array<InputMaybe<NewsFilter>>>
  body_contains: InputMaybe<Scalars["String"]["input"]>
  body_exists: InputMaybe<Scalars["Boolean"]["input"]>
  body_not_contains: InputMaybe<Scalars["String"]["input"]>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  newsCategory: InputMaybe<CfNewsCategoryNestedFilter>
  newsCategory_exists: InputMaybe<Scalars["Boolean"]["input"]>
  publishTime: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_exists: InputMaybe<Scalars["Boolean"]["input"]>
  publishTime_gt: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_gte: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  publishTime_lt: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_lte: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_not: InputMaybe<Scalars["DateTime"]["input"]>
  publishTime_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >
  sys: InputMaybe<SysFilter>
  title: InputMaybe<Scalars["String"]["input"]>
  title_contains: InputMaybe<Scalars["String"]["input"]>
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  title_not: InputMaybe<Scalars["String"]["input"]>
  title_not_contains: InputMaybe<Scalars["String"]["input"]>
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  unpublishTime: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_exists: InputMaybe<Scalars["Boolean"]["input"]>
  unpublishTime_gt: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_gte: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  unpublishTime_lt: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_lte: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_not: InputMaybe<Scalars["DateTime"]["input"]>
  unpublishTime_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >
}

export type NewsLinkingCollections = {
  entryCollection: Maybe<EntryCollection>
}

export type NewsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum NewsOrder {
  PublishTimeAsc = "publishTime_ASC",
  PublishTimeDesc = "publishTime_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UnpublishTimeAsc = "unpublishTime_ASC",
  UnpublishTimeDesc = "unpublishTime_DESC",
}

export type Query = {
  _node: Maybe<_Node>
  asset: Maybe<Asset>
  assetCollection: Maybe<AssetCollection>
  entryCollection: Maybe<EntryCollection>
  episode: Maybe<Episode>
  episodeCollection: Maybe<EpisodeCollection>
  image: Maybe<Image>
  imageCollection: Maybe<ImageCollection>
  news: Maybe<News>
  newsCategory: Maybe<NewsCategory>
  newsCategoryCollection: Maybe<NewsCategoryCollection>
  newsCollection: Maybe<NewsCollection>
  question: Maybe<Question>
  questionCollection: Maybe<QuestionCollection>
  questionGroup: Maybe<QuestionGroup>
  questionGroupCollection: Maybe<QuestionGroupCollection>
  subscriptionPlans: Maybe<SubscriptionPlans>
  subscriptionPlansCollection: Maybe<SubscriptionPlansCollection>
  text: Maybe<Text>
  textCollection: Maybe<TextCollection>
}

export type Query_NodeArgs = {
  id: Scalars["ID"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryAssetArgs = {
  id: Scalars["String"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<AssetFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<EntryFilter>
}

export type QueryEpisodeArgs = {
  id: Scalars["String"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryEpisodeCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<EpisodeOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<EpisodeFilter>
}

export type QueryImageArgs = {
  id: Scalars["String"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryImageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<ImageOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<ImageFilter>
}

export type QueryNewsArgs = {
  id: Scalars["String"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryNewsCategoryArgs = {
  id: Scalars["String"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryNewsCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<NewsCategoryOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<NewsCategoryFilter>
}

export type QueryNewsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<NewsOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<NewsFilter>
}

export type QueryQuestionArgs = {
  id: Scalars["String"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<QuestionOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<QuestionFilter>
}

export type QueryQuestionGroupArgs = {
  id: Scalars["String"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryQuestionGroupCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<QuestionGroupOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<QuestionGroupFilter>
}

export type QuerySubscriptionPlansArgs = {
  id: Scalars["String"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QuerySubscriptionPlansCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<SubscriptionPlansOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<SubscriptionPlansFilter>
}

export type QueryTextArgs = {
  id: Scalars["String"]["input"]
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryTextCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<TextOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<TextFilter>
}

/** 質問と、質問に対する回答を提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/question) */
export type Question = Entry & {
  answer: Maybe<QuestionAnswer>
  contentfulMetadata: ContentfulMetadata
  linkedFrom: Maybe<QuestionLinkingCollections>
  question: Maybe<Scalars["String"]["output"]>
  sys: Sys
}

/** 質問と、質問に対する回答を提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/question) */
export type QuestionAnswerArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** 質問と、質問に対する回答を提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/question) */
export type QuestionLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** 質問と、質問に対する回答を提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/question) */
export type QuestionQuestionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

export type QuestionAnswer = {
  json: Scalars["JSON"]["output"]
  links: QuestionAnswerLinks
}

export type QuestionAnswerAssets = {
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type QuestionAnswerEntries = {
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type QuestionAnswerLinks = {
  assets: QuestionAnswerAssets
  entries: QuestionAnswerEntries
  resources: QuestionAnswerResources
}

export type QuestionAnswerResources = {
  block: Array<QuestionAnswerResourcesBlock>
  hyperlink: Array<QuestionAnswerResourcesHyperlink>
  inline: Array<QuestionAnswerResourcesInline>
}

export type QuestionAnswerResourcesBlock = ResourceLink & {
  sys: ResourceSys
}

export type QuestionAnswerResourcesHyperlink = ResourceLink & {
  sys: ResourceSys
}

export type QuestionAnswerResourcesInline = ResourceLink & {
  sys: ResourceSys
}

export type QuestionCollection = {
  items: Array<Maybe<Question>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type QuestionFilter = {
  AND: InputMaybe<Array<InputMaybe<QuestionFilter>>>
  OR: InputMaybe<Array<InputMaybe<QuestionFilter>>>
  answer_contains: InputMaybe<Scalars["String"]["input"]>
  answer_exists: InputMaybe<Scalars["Boolean"]["input"]>
  answer_not_contains: InputMaybe<Scalars["String"]["input"]>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  question: InputMaybe<Scalars["String"]["input"]>
  question_contains: InputMaybe<Scalars["String"]["input"]>
  question_exists: InputMaybe<Scalars["Boolean"]["input"]>
  question_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  question_not: InputMaybe<Scalars["String"]["input"]>
  question_not_contains: InputMaybe<Scalars["String"]["input"]>
  question_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  sys: InputMaybe<SysFilter>
}

/** 質問を項目にまとめて提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/questionGroup) */
export type QuestionGroup = Entry & {
  contentfulMetadata: ContentfulMetadata
  displayName: Maybe<Scalars["String"]["output"]>
  displayOrder: Maybe<Scalars["Int"]["output"]>
  linkedFrom: Maybe<QuestionGroupLinkingCollections>
  questionCollection: Maybe<QuestionGroupQuestionCollection>
  sys: Sys
}

/** 質問を項目にまとめて提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/questionGroup) */
export type QuestionGroupDisplayNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** 質問を項目にまとめて提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/questionGroup) */
export type QuestionGroupDisplayOrderArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** 質問を項目にまとめて提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/questionGroup) */
export type QuestionGroupLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** 質問を項目にまとめて提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/questionGroup) */
export type QuestionGroupQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<Array<InputMaybe<QuestionGroupQuestionCollectionOrder>>>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
  where: InputMaybe<QuestionFilter>
}

export type QuestionGroupCollection = {
  items: Array<Maybe<QuestionGroup>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type QuestionGroupFilter = {
  AND: InputMaybe<Array<InputMaybe<QuestionGroupFilter>>>
  OR: InputMaybe<Array<InputMaybe<QuestionGroupFilter>>>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  displayName: InputMaybe<Scalars["String"]["input"]>
  displayName_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayName_not: InputMaybe<Scalars["String"]["input"]>
  displayName_not_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayOrder: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayOrder_gt: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_gte: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  displayOrder_lt: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_lte: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_not: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  question: InputMaybe<CfQuestionNestedFilter>
  questionCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>
  sys: InputMaybe<SysFilter>
}

export type QuestionGroupLinkingCollections = {
  entryCollection: Maybe<EntryCollection>
}

export type QuestionGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum QuestionGroupOrder {
  DisplayNameAsc = "displayName_ASC",
  DisplayNameDesc = "displayName_DESC",
  DisplayOrderAsc = "displayOrder_ASC",
  DisplayOrderDesc = "displayOrder_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type QuestionGroupQuestionCollection = {
  items: Array<Maybe<Question>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export enum QuestionGroupQuestionCollectionOrder {
  QuestionAsc = "question_ASC",
  QuestionDesc = "question_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type QuestionLinkingCollections = {
  entryCollection: Maybe<EntryCollection>
  questionGroupCollection: Maybe<QuestionGroupCollection>
}

export type QuestionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type QuestionLinkingCollectionsQuestionGroupCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  order: InputMaybe<
    Array<InputMaybe<QuestionLinkingCollectionsQuestionGroupCollectionOrder>>
  >
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum QuestionLinkingCollectionsQuestionGroupCollectionOrder {
  DisplayNameAsc = "displayName_ASC",
  DisplayNameDesc = "displayName_DESC",
  DisplayOrderAsc = "displayOrder_ASC",
  DisplayOrderDesc = "displayOrder_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum QuestionOrder {
  QuestionAsc = "question_ASC",
  QuestionDesc = "question_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type ResourceLink = {
  sys: ResourceSys
}

export type ResourceSys = {
  linkType: Scalars["String"]["output"]
  urn: Scalars["String"]["output"]
}

/** サブスクリプションのプランを保管するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/subscriptionPlans) */
export type SubscriptionPlans = Entry & {
  contentfulMetadata: ContentfulMetadata
  displayName: Maybe<Scalars["String"]["output"]>
  displayOrder: Maybe<Scalars["Int"]["output"]>
  linkedFrom: Maybe<SubscriptionPlansLinkingCollections>
  membershipName: Maybe<Scalars["String"]["output"]>
  planId: Maybe<Scalars["String"]["output"]>
  price: Maybe<Scalars["String"]["output"]>
  sys: Sys
}

/** サブスクリプションのプランを保管するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/subscriptionPlans) */
export type SubscriptionPlansDisplayNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** サブスクリプションのプランを保管するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/subscriptionPlans) */
export type SubscriptionPlansDisplayOrderArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** サブスクリプションのプランを保管するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/subscriptionPlans) */
export type SubscriptionPlansLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** サブスクリプションのプランを保管するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/subscriptionPlans) */
export type SubscriptionPlansMembershipNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** サブスクリプションのプランを保管するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/subscriptionPlans) */
export type SubscriptionPlansPlanIdArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** サブスクリプションのプランを保管するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/subscriptionPlans) */
export type SubscriptionPlansPriceArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

export type SubscriptionPlansCollection = {
  items: Array<Maybe<SubscriptionPlans>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type SubscriptionPlansFilter = {
  AND: InputMaybe<Array<InputMaybe<SubscriptionPlansFilter>>>
  OR: InputMaybe<Array<InputMaybe<SubscriptionPlansFilter>>>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  displayName: InputMaybe<Scalars["String"]["input"]>
  displayName_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayName_not: InputMaybe<Scalars["String"]["input"]>
  displayName_not_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayOrder: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayOrder_gt: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_gte: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  displayOrder_lt: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_lte: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_not: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  membershipName: InputMaybe<Scalars["String"]["input"]>
  membershipName_contains: InputMaybe<Scalars["String"]["input"]>
  membershipName_exists: InputMaybe<Scalars["Boolean"]["input"]>
  membershipName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  membershipName_not: InputMaybe<Scalars["String"]["input"]>
  membershipName_not_contains: InputMaybe<Scalars["String"]["input"]>
  membershipName_not_in: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >
  planId: InputMaybe<Scalars["String"]["input"]>
  planId_contains: InputMaybe<Scalars["String"]["input"]>
  planId_exists: InputMaybe<Scalars["Boolean"]["input"]>
  planId_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  planId_not: InputMaybe<Scalars["String"]["input"]>
  planId_not_contains: InputMaybe<Scalars["String"]["input"]>
  planId_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  price: InputMaybe<Scalars["String"]["input"]>
  price_contains: InputMaybe<Scalars["String"]["input"]>
  price_exists: InputMaybe<Scalars["Boolean"]["input"]>
  price_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  price_not: InputMaybe<Scalars["String"]["input"]>
  price_not_contains: InputMaybe<Scalars["String"]["input"]>
  price_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  sys: InputMaybe<SysFilter>
}

export type SubscriptionPlansLinkingCollections = {
  entryCollection: Maybe<EntryCollection>
}

export type SubscriptionPlansLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum SubscriptionPlansOrder {
  DisplayNameAsc = "displayName_ASC",
  DisplayNameDesc = "displayName_DESC",
  DisplayOrderAsc = "displayOrder_ASC",
  DisplayOrderDesc = "displayOrder_DESC",
  MembershipNameAsc = "membershipName_ASC",
  MembershipNameDesc = "membershipName_DESC",
  PlanIdAsc = "planId_ASC",
  PlanIdDesc = "planId_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Sys = {
  environmentId: Scalars["String"]["output"]
  firstPublishedAt: Maybe<Scalars["DateTime"]["output"]>
  id: Scalars["String"]["output"]
  publishedAt: Maybe<Scalars["DateTime"]["output"]>
  publishedVersion: Maybe<Scalars["Int"]["output"]>
  spaceId: Scalars["String"]["output"]
}

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars["DateTime"]["input"]>
  firstPublishedAt_exists: InputMaybe<Scalars["Boolean"]["input"]>
  firstPublishedAt_gt: InputMaybe<Scalars["DateTime"]["input"]>
  firstPublishedAt_gte: InputMaybe<Scalars["DateTime"]["input"]>
  firstPublishedAt_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >
  firstPublishedAt_lt: InputMaybe<Scalars["DateTime"]["input"]>
  firstPublishedAt_lte: InputMaybe<Scalars["DateTime"]["input"]>
  firstPublishedAt_not: InputMaybe<Scalars["DateTime"]["input"]>
  firstPublishedAt_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >
  id: InputMaybe<Scalars["String"]["input"]>
  id_contains: InputMaybe<Scalars["String"]["input"]>
  id_exists: InputMaybe<Scalars["Boolean"]["input"]>
  id_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  id_not: InputMaybe<Scalars["String"]["input"]>
  id_not_contains: InputMaybe<Scalars["String"]["input"]>
  id_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  publishedAt: InputMaybe<Scalars["DateTime"]["input"]>
  publishedAt_exists: InputMaybe<Scalars["Boolean"]["input"]>
  publishedAt_gt: InputMaybe<Scalars["DateTime"]["input"]>
  publishedAt_gte: InputMaybe<Scalars["DateTime"]["input"]>
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  publishedAt_lt: InputMaybe<Scalars["DateTime"]["input"]>
  publishedAt_lte: InputMaybe<Scalars["DateTime"]["input"]>
  publishedAt_not: InputMaybe<Scalars["DateTime"]["input"]>
  publishedAt_not_in: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >
  publishedVersion: InputMaybe<Scalars["Float"]["input"]>
  publishedVersion_exists: InputMaybe<Scalars["Boolean"]["input"]>
  publishedVersion_gt: InputMaybe<Scalars["Float"]["input"]>
  publishedVersion_gte: InputMaybe<Scalars["Float"]["input"]>
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  publishedVersion_lt: InputMaybe<Scalars["Float"]["input"]>
  publishedVersion_lte: InputMaybe<Scalars["Float"]["input"]>
  publishedVersion_not: InputMaybe<Scalars["Float"]["input"]>
  publishedVersion_not_in: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >
}

/** 汎用的なテキストを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/text) */
export type Text = Entry & {
  contentfulMetadata: ContentfulMetadata
  description: Maybe<Scalars["String"]["output"]>
  displayName: Maybe<Scalars["String"]["output"]>
  linkedFrom: Maybe<TextLinkingCollections>
  sys: Sys
}

/** 汎用的なテキストを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/text) */
export type TextDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** 汎用的なテキストを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/text) */
export type TextDisplayNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>
}

/** 汎用的なテキストを提供するモデル [See type definition](https://app.contentful.com/spaces/crfbloeb3qaa/content_types/text) */
export type TextLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type TextCollection = {
  items: Array<Maybe<Text>>
  limit: Scalars["Int"]["output"]
  skip: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type TextFilter = {
  AND: InputMaybe<Array<InputMaybe<TextFilter>>>
  OR: InputMaybe<Array<InputMaybe<TextFilter>>>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  description: InputMaybe<Scalars["String"]["input"]>
  description_contains: InputMaybe<Scalars["String"]["input"]>
  description_exists: InputMaybe<Scalars["Boolean"]["input"]>
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  description_not: InputMaybe<Scalars["String"]["input"]>
  description_not_contains: InputMaybe<Scalars["String"]["input"]>
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayName: InputMaybe<Scalars["String"]["input"]>
  displayName_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayName_not: InputMaybe<Scalars["String"]["input"]>
  displayName_not_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  sys: InputMaybe<SysFilter>
}

export type TextLinkingCollections = {
  entryCollection: Maybe<EntryCollection>
}

export type TextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  locale: InputMaybe<Scalars["String"]["input"]>
  preview: InputMaybe<Scalars["Boolean"]["input"]>
  skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum TextOrder {
  DisplayNameAsc = "displayName_ASC",
  DisplayNameDesc = "displayName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type _Node = {
  _id: Scalars["ID"]["output"]
}

export type CfNewsCategoryNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfNewsCategoryNestedFilter>>>
  OR: InputMaybe<Array<InputMaybe<CfNewsCategoryNestedFilter>>>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  displayName: InputMaybe<Scalars["String"]["input"]>
  displayName_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayName_not: InputMaybe<Scalars["String"]["input"]>
  displayName_not_contains: InputMaybe<Scalars["String"]["input"]>
  displayName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  displayOrder: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_exists: InputMaybe<Scalars["Boolean"]["input"]>
  displayOrder_gt: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_gte: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  displayOrder_lt: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_lte: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_not: InputMaybe<Scalars["Int"]["input"]>
  displayOrder_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  sys: InputMaybe<SysFilter>
}

export type CfQuestionNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfQuestionNestedFilter>>>
  OR: InputMaybe<Array<InputMaybe<CfQuestionNestedFilter>>>
  answer_contains: InputMaybe<Scalars["String"]["input"]>
  answer_exists: InputMaybe<Scalars["Boolean"]["input"]>
  answer_not_contains: InputMaybe<Scalars["String"]["input"]>
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>
  question: InputMaybe<Scalars["String"]["input"]>
  question_contains: InputMaybe<Scalars["String"]["input"]>
  question_exists: InputMaybe<Scalars["Boolean"]["input"]>
  question_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  question_not: InputMaybe<Scalars["String"]["input"]>
  question_not_contains: InputMaybe<Scalars["String"]["input"]>
  question_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  sys: InputMaybe<SysFilter>
}

export type GetEpisodeQueryVariables = Exact<{
  episodeId: Scalars["String"]["input"]
}>

export type GetEpisodeQuery = {
  episode: {
    title: string | null
    publishTime: any | null
    unpublishTime: any | null
    sys: { id: string }
    thumbnail: { url: string | null } | null
    illustsCollection: { items: Array<{ url: string | null } | null> } | null
  } | null
}

export type GetEpisodeArchiveQueryVariables = Exact<{
  tag: InputMaybe<Scalars["String"]["input"]>
}>

export type GetEpisodeArchiveQuery = {
  episodeCollection: {
    items: Array<{
      title: string | null
      publishTime: any | null
      unpublishTime: any | null
      sys: { id: string }
      thumbnail: { url: string | null } | null
    } | null>
  } | null
}

export type GetImageQueryVariables = Exact<{
  displayName: Scalars["String"]["input"]
}>

export type GetImageQuery = {
  imageCollection: {
    items: Array<{
      displayName: string | null
      image: {
        url: string | null
        width: number | null
        height: number | null
      } | null
    } | null>
  } | null
}

export type GetNewsQueryVariables = Exact<{
  categoryId: InputMaybe<Scalars["String"]["input"]>
  skip: Scalars["Int"]["input"]
  limit: Scalars["Int"]["input"]
  currentTime: InputMaybe<Scalars["DateTime"]["input"]>
  tag: Scalars["String"]["input"]
}>

export type GetNewsQuery = {
  newsCollection: {
    total: number
    items: Array<{
      title: string | null
      publishTime: any | null
      unpublishTime: any | null
      sys: { id: string }
      newsCategory: { displayName: string | null; sys: { id: string } } | null
    } | null>
  } | null
}

export type GetNewsDetailQueryVariables = Exact<{
  newsId: Scalars["String"]["input"]
}>

export type GetNewsDetailQuery = {
  news: {
    title: string | null
    publishTime: any | null
    unpublishTime: any | null
    sys: { id: string }
    body: {
      json: any
      links: {
        assets: {
          block: Array<{
            title: string | null
            description: string | null
            contentType: string | null
            fileName: string | null
            size: number | null
            url: string | null
            width: number | null
            height: number | null
            sys: { id: string }
            contentfulMetadata: { tags: Array<{ id: string | null } | null> }
          } | null>
        }
      }
    } | null
    newsCategory: { displayName: string | null; sys: { id: string } } | null
  } | null
}

export type GetNewsCategoryQueryVariables = Exact<{
  tag: Scalars["String"]["input"]
}>

export type GetNewsCategoryQuery = {
  newsCategoryCollection: {
    items: Array<{
      displayName: string | null
      displayOrder: number | null
      sys: { id: string }
    } | null>
  } | null
}

export type GetQuestionGroupQueryVariables = Exact<{ [key: string]: never }>

export type GetQuestionGroupQuery = {
  questionGroupCollection: {
    items: Array<{
      displayName: string | null
      sys: { id: string }
      questionCollection: {
        items: Array<{
          question: string | null
          answer: { json: any } | null
        } | null>
      } | null
    } | null>
  } | null
}

export type GetSubscriptionPlansQueryVariables = Exact<{
  tag: Scalars["String"]["input"]
}>

export type GetSubscriptionPlansQuery = {
  subscriptionPlansCollection: {
    items: Array<{
      displayName: string | null
      displayOrder: number | null
      planId: string | null
      price: string | null
      membershipName: string | null
      sys: { id: string }
    } | null>
  } | null
}

export type GetTextQueryVariables = Exact<{
  displayName: Scalars["String"]["input"]
}>

export type GetTextQuery = {
  textCollection: {
    items: Array<{
      displayName: string | null
      description: string | null
    } | null>
  } | null
}

export const GetEpisodeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getEpisode" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "episodeId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "episode" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "episodeId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sys" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "thumbnail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "illustsCollection" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "100" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "publishTime" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "unpublishTime" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEpisodeQuery, GetEpisodeQueryVariables>
export const GetEpisodeArchiveDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getEpisodeArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "tag" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "episodeCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "100" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "publishTime_DESC" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contentfulMetadata" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tags_exists" },
                            value: { kind: "BooleanValue", value: true },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tags" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: {
                                    kind: "Name",
                                    value: "id_contains_some",
                                  },
                                  value: {
                                    kind: "ListValue",
                                    values: [
                                      {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "tag" },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sys" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thumbnail" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "publishTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "unpublishTime" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEpisodeArchiveQuery,
  GetEpisodeArchiveQueryVariables
>
export const GetImageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getImage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "displayName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "imageCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "displayName" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "image" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetImageQuery, GetImageQueryVariables>
export const GetNewsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getNews" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "currentTime" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DateTime" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "tag" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "newsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "publishTime_DESC" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "newsCategory" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "sys" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "id" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "categoryId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "publishTime_lte" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "currentTime" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contentfulMetadata" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tags_exists" },
                            value: { kind: "BooleanValue", value: true },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tags" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: {
                                    kind: "Name",
                                    value: "id_contains_some",
                                  },
                                  value: {
                                    kind: "ListValue",
                                    values: [
                                      {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "tag" },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sys" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "newsCategory" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sys" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "displayName" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "publishTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "unpublishTime" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNewsQuery, GetNewsQueryVariables>
export const GetNewsDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getNewsDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "newsId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "news" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "newsId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sys" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "body" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "json" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "links" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "assets" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "block" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "sys" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "id",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "contentfulMetadata",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "tags",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "id",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "title",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "description",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "contentType",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "fileName",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "width",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "height",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newsCategory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sys" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "publishTime" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "unpublishTime" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNewsDetailQuery, GetNewsDetailQueryVariables>
export const GetNewsCategoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getNewsCategory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "tag" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "newsCategoryCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contentfulMetadata" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tags_exists" },
                            value: { kind: "BooleanValue", value: true },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tags" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: {
                                    kind: "Name",
                                    value: "id_contains_some",
                                  },
                                  value: {
                                    kind: "ListValue",
                                    values: [
                                      {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "tag" },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "displayOrder_ASC" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sys" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNewsCategoryQuery,
  GetNewsCategoryQueryVariables
>
export const GetQuestionGroupDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getQuestionGroup" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "questionGroupCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "displayOrder_ASC" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sys" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "questionCollection" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "items" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "question" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "answer" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "json" },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetQuestionGroupQuery,
  GetQuestionGroupQueryVariables
>
export const GetSubscriptionPlansDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSubscriptionPlans" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "tag" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionPlansCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contentfulMetadata" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tags_exists" },
                            value: { kind: "BooleanValue", value: true },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tags" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: {
                                    kind: "Name",
                                    value: "id_contains_some",
                                  },
                                  value: {
                                    kind: "ListValue",
                                    values: [
                                      {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "tag" },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sys" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "planId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "membershipName" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSubscriptionPlansQuery,
  GetSubscriptionPlansQueryVariables
>
export const GetTextDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getText" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "displayName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "textCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "displayName" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTextQuery, GetTextQueryVariables>
