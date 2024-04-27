import NextLink from "next/link"
import { Box, Link } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

type Props = {
  linkUrl?: string
  children: ReactNode
  width?: number
}

/**
 * RichTextImage モデルを使用して画像のサイズとリンクを指定するコンポーネント
 */
export const RichTextImageWrapper: FC<Props> = ({
  linkUrl,
  children,
  width,
}) => {
  if (!linkUrl) {
    return (
      <Box display="block" margin="0 auto" width={width}>
        {children}
      </Box>
    )
  }

  return (
    <NextLink passHref legacyBehavior href={linkUrl} prefetch={false}>
      <Link
        color="textLink"
        isExternal={true}
        rel="noopener"
        width={width}
        display="block"
        margin="0 auto">
        {children}
      </Link>
    </NextLink>
  )
}
