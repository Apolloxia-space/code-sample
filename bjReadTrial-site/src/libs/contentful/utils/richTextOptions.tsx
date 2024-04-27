import { Options } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import React from "react"
import { AssetData } from "src/infra/contentful/types/type"
import { EMBED_ENTRY_LIST } from "src/libs/contentful/constants/richText"
import { getIsEmptyParagraph } from "src/libs/contentful/utils/getIsEmptyParagraph"

export type Renders = {
  renderParagraph: (children: React.ReactNode) => React.ReactNode
  renderImage: (imageSrc: any, width: any, height: any) => React.ReactNode
  renderVideo: (videoSrc: string, contentType: any) => React.ReactNode
  renderHeading1: (children: React.ReactNode) => React.ReactNode
  renderHeading2: (children: React.ReactNode) => React.ReactNode
  renderHeading3: (children: React.ReactNode) => React.ReactNode
  renderHeading4: (children: React.ReactNode) => React.ReactNode
  renderHeading5: (children: React.ReactNode) => React.ReactNode
  renderHeading6: (children: React.ReactNode) => React.ReactNode
  renderUlList: (children: React.ReactNode) => React.ReactNode
  renderOlList: (children: React.ReactNode) => React.ReactNode
  renderListItem: (children: React.ReactNode) => React.ReactNode
  renderHr: () => React.ReactNode
  renderHyperlink: (href: any, children: React.ReactNode) => React.ReactNode
  renderRichTextImage: (
    url?: string,
    imageWidth?: number,
    imageHeight?: number,
    imageSrc?: string,
    width?: number,
  ) => React.ReactNode
  renderText: Options["renderText"]
  assetsData?: AssetData[]
}

/**
 * RichTextのrender関数を渡してoptionsを返すhooks
 */
export const richTextOptions = ({
  renderParagraph,
  renderImage,
  renderVideo,
  renderHeading1,
  renderHeading2,
  renderHeading3,
  renderHeading4,
  renderHeading5,
  renderHeading6,
  renderUlList,
  renderOlList,
  renderListItem,
  renderHr,
  renderHyperlink,
  renderRichTextImage,
  renderText,
  assetsData,
}: Renders) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (getIsEmptyParagraph(node)) {
          return <br />
        }

        return renderParagraph(children)
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const sysId = node.data.target.sys.id

        // assetsData から sysId に対応するアセットを検索
        const asset = assetsData?.find((asset) => asset.sys.id === sysId)

        if (asset && asset.contentType?.startsWith("image")) {
          return renderImage(asset.url, asset.width, asset.height)
        }

        if (asset && asset.contentType?.startsWith("video")) {
          const videoSrc = `https:${asset.url}`
          return renderVideo(videoSrc, asset.contentType)
        }
        return null
      },
      [BLOCKS.HEADING_1]: (_, children) => {
        return renderHeading1(children)
      },
      [BLOCKS.HEADING_2]: (_, children) => {
        return renderHeading2(children)
      },
      [BLOCKS.HEADING_3]: (_, children) => {
        return renderHeading3(children)
      },
      [BLOCKS.HEADING_4]: (_, children) => {
        return renderHeading4(children)
      },
      [BLOCKS.HEADING_5]: (_, children) => {
        return renderHeading5(children)
      },
      [BLOCKS.HEADING_6]: (_, children) => {
        return renderHeading6(children)
      },
      [BLOCKS.UL_LIST]: (_, children) => {
        return renderUlList(children)
      },
      [BLOCKS.OL_LIST]: (_, children) => {
        return renderOlList(children)
      },
      [BLOCKS.LIST_ITEM]: (_, children) => {
        return renderListItem(children)
      },
      [BLOCKS.HR]: () => {
        return renderHr()
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const href = node.data.uri
        return renderHyperlink(href, children)
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const target = node.data.target
        const embededEntryModelId = target.sys.contentType.sys.id

        switch (embededEntryModelId) {
          case EMBED_ENTRY_LIST.RICH_TEXT_IMAGE:
            const fields = target.fields
            const linkUrl = fields.linkUrl
            const width = fields.width
            const file = fields.image.fields.file
            const imageWidth = file.details.image?.width
            const imageHeight = file.details.image?.height
            const imageSrc = file.url
            return renderRichTextImage(
              linkUrl,
              imageWidth,
              imageHeight,
              imageSrc,
              width,
            )
          default:
            return null
        }
      },
    },
    renderText: renderText,
  }

  return options
}
