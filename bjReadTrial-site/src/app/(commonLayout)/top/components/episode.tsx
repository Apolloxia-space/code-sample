import { Text, Heading, Flex, Image, Button } from "@chakra-ui/react"
import { getEpisode } from "src/infra/contentful/repositories/episode"

export const TopEpisodeSection: React.FC = async () => {
  const firstEpisodeId = "3Mvpf0IubhOQZrMMf89vLN"
  const episode = await getEpisode(firstEpisodeId)

  return (
    <Flex maxWidth="800px" margin="0 auto 70px" flexDirection="column">
      <Heading
        as="h1"
        color="textPrimary"
        textAlign="center"
        marginBottom="25px">
        EPISODE
      </Heading>
      {episode && (
        <Flex
          key={episode.sys.id}
          backgroundColor="backgroundSecondary"
          padding="10px"
          borderColor="secondary"
          width="100%"
          marginBottom="10px"
          justifyContent="center"
          gap={["30px", "40px"]}
          flexWrap="wrap"
          alignItems="center">
          <Image
            width="200px"
            src={episode.thumbnail?.url ?? ""}
            alt={episode.title ?? ""}
          />
          <Button
            as="a"
            href="/episode/3Mvpf0IubhOQZrMMf89vLN"
            backgroundColor="white"
            marginBottom="20px"
            padding={["25px 25px", "30px 30px"]}
            border="3px solid"
            borderRadius="50px"
            borderColor="primary"
            _hover={{ backgroundColor: "primary", color: "white" }}>
            <Text fontSize={["16px", "20px"]} textAlign="left">
              試し読みする
            </Text>
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default TopEpisodeSection
