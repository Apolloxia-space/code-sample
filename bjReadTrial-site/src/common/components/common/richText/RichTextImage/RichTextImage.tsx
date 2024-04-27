import { Box, Image } from "@chakra-ui/react"
import { FC } from "react"

type RicthTextImageProps = {
  imageSrc?: string
  htmlWidth?: number
  htmlHeight?: number
  imageMargin?: string
}

export const RichTextImage: FC<RicthTextImageProps> = ({
  imageSrc,
  htmlWidth,
  htmlHeight,
  imageMargin,
}) => {
  if (!imageSrc) {
    return null
  }

  return (
    <Box as="picture">
      <source
        media="(min-width: 480px)"
        srcSet={`${imageSrc}?w=856, ${imageSrc}?w=1712 2x`}
      />
      <source srcSet={`${imageSrc}?w=450, ${imageSrc}?w=900 2x`} />
      <Image
        src={imageSrc}
        htmlWidth={htmlWidth}
        htmlHeight={htmlHeight}
        loading="lazy"
        margin={imageMargin ? imageMargin : "20px 0"}
        objectFit="cover"
        maxWidth="100%"
      />
    </Box>
  )
}
