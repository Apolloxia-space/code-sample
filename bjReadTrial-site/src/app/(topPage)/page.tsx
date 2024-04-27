import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react"
import { NextPage } from "next"
import { TopNewsSection } from "src/app/(commonLayout)/top/components/news"
import { getImage } from "src/infra/contentful/repositories/image"
import { TopEpisodeSection } from "../(commonLayout)/top/components/episode"

type TopPageProps = {}

export const revalidate = 60

const TopPage: NextPage<TopPageProps> = async () => {
  const topHeroImage = await getImage("topHeroImage")
  return (
    <Flex flexDirection="column">
      <AspectRatio
        zIndex={-1}
        ratio={
          topHeroImage!.items[0]!.image!.width! /
          topHeroImage!.items[0]!.image!.height!
        }
        marginBottom={["50px", "100px"]}>
        <Image objectFit="cover" src={topHeroImage!.items[0]!.image!.url!} />
      </AspectRatio>
      <Box paddingX={["20px", "30px"]}>
        <TopNewsSection />
        <TopEpisodeSection />
      </Box>
    </Flex>
  )
}

export default TopPage
