import {
  Box,
  Divider,
  OrderedList,
  UnorderedList,
  ListItem,
  Text,
  Link,
} from "@chakra-ui/react"
import {
  documentToReactComponents,
  RenderText,
} from "@contentful/rich-text-react-renderer"
import { FC, useCallback } from "react"
import NextLink from "next/link"
import {
  richTextOptions,
  Renders,
} from "src/libs/contentful/utils/richTextOptions"
import { RichTextImage } from "src/common/components/common/richText/RichTextImage/RichTextImage"
import ReactHtmlParser from "react-html-parser"
import { RichTextImageWrapper } from "src/common/components/common/richText/RichTextImageWrapper/RichTextImageWrapper"

export const RichText: FC<RichTextProps> = ({
  content,
  textColor = "textPrimary",
  assetsData,
  textLineHeight,
  textFontSize,
  imageMargin,
  blockProps,
}) => {
  const renderParagraph = useCallback<Renders["renderParagraph"]>(
    (children) => {
      return (
        <Text
          color={textColor}
          fontWeight="medium"
          fontSize={textFontSize ? textFontSize : "15px"}
          whiteSpace="pre-wrap"
          lineHeight={textLineHeight ? textLineHeight : "27px"}
          letterSpacing="0.1em"
          variant="txt">
          {children}
        </Text>
      )
    },
    [textColor, textFontSize, textLineHeight],
  )
  const renderImage = useCallback<Renders["renderImage"]>(
    (imageSrc, width, height) => {
      return (
        <RichTextImage
          imageSrc={imageSrc}
          htmlWidth={width}
          htmlHeight={height}
          imageMargin={imageMargin}
        />
      )
    },
    [imageMargin],
  )
  const renderVideo = useCallback((videoSrc: string, contentType: any) => {
    return (
      <Box
        as="video"
        maxWidth="100%"
        objectFit="cover"
        margin="20px 0"
        controls={true}>
        <source src={videoSrc} type={contentType} />
      </Box>
    )
  }, [])
  const renderHeading1 = useCallback(
    (children: React.ReactNode) => {
      return (
        <Text as="h1" fontSize="5xl" color={textColor}>
          {children}
        </Text>
      )
    },
    [textColor],
  )
  const renderHeading2 = useCallback(
    (children: React.ReactNode) => {
      return (
        <Text as="h2" fontSize="4xl" color={textColor}>
          {children}
        </Text>
      )
    },
    [textColor],
  )
  const renderHeading3 = useCallback(
    (children: React.ReactNode) => {
      return (
        <Text as="h3" fontSize="3xl" color={textColor}>
          {children}
        </Text>
      )
    },
    [textColor],
  )
  const renderHeading4 = useCallback(
    (children: React.ReactNode) => {
      return (
        <Text as="h4" fontSize="2xl" color={textColor}>
          {children}
        </Text>
      )
    },
    [textColor],
  )
  const renderHeading5 = useCallback(
    (children: React.ReactNode) => {
      return (
        <Text as="h5" fontSize="xl" color={textColor}>
          {children}
        </Text>
      )
    },
    [textColor],
  )
  const renderHeading6 = useCallback(
    (children: React.ReactNode) => {
      return (
        <Text as="h6" fontSize="lg" color={textColor}>
          {children}
        </Text>
      )
    },
    [textColor],
  )
  const renderUlList = useCallback((children: React.ReactNode) => {
    return <UnorderedList>{children}</UnorderedList>
  }, [])
  const renderOlList = useCallback((children: React.ReactNode) => {
    return <OrderedList>{children}</OrderedList>
  }, [])
  const renderListItem = useCallback((children: React.ReactNode) => {
    return (
      <ListItem fontWeight="medium" fontSize="15px">
        {children}
      </ListItem>
    )
  }, [])
  const renderHr = useCallback(() => {
    return <Divider marginY="2" color="border" />
  }, [])
  const renderHyperlink = useCallback(
    (href: string, children: React.ReactNode) => {
      return (
        <NextLink passHref legacyBehavior href={href} prefetch={false}>
          <Link color="textQuaternary" isExternal={true} rel="noopener">
            {children}
          </Link>
        </NextLink>
      )
    },
    [],
  )
  const renderRichTextImage = useCallback<Renders["renderRichTextImage"]>(
    (linkUrl, imageWidth, imageHeight, imageSrc) => {
      return (
        <RichTextImageWrapper linkUrl={linkUrl}>
          <RichTextImage
            imageSrc={imageSrc}
            htmlWidth={imageWidth}
            htmlHeight={imageHeight}
            imageMargin={imageMargin}
          />
        </RichTextImageWrapper>
      )
    },
    [imageMargin],
  )
  const renderText = useCallback<RenderText>((text: string) => {
    return <>{ReactHtmlParser(text)}</>
  }, [])

  const options = richTextOptions({
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
  })

  return (
    <Box
      {...blockProps}
      sx={{
        a: { textDecoration: "underline" },
      }}>
      {documentToReactComponents(content, options)}
    </Box>
  )
}
