type RichTextProps = {
  content: import("@contentful/rich-text-types").Document
  textColor?: string
  textLineHeight?: string
  textFontSize?: string
  imageMargin?: string
  blockProps?: import("@chakra-ui/react").BoxProps
  assetsData?: import("src/infra/contentful/types/type").Asset[]
}
