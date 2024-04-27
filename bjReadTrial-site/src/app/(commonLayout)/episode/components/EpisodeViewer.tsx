"use client"
import {
  Box,
  Image,
  useMediaQuery,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
  useBoolean,
  HStack,
} from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { Navigation } from "@swiper/useClient/swiperModules"
import { Swiper, SwiperSlide } from "@swiper/useClient/swiper"
import { Swiper as SwiperType } from "swiper/types"
import type { Episode } from "src/infra/contentful/entities/episode"
import { useState } from "react"
import { RxSlider } from "react-icons/rx"

type Props = { episode: Episode }

export const EpisodeViewer: React.FC<Props> = ({ episode }) => {
  const router = useRouter()
  const [sliderValue, setSliderValue] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [showTooltip, { on: showTooltipOn, off: showTooltipOff }] =
    useBoolean(false)
  const [
    isSliderVisible,
    { toggle: toggleSliderVisible, off: setSliderHidden },
  ] = useBoolean(false)
  const [isMobile, isTablet] = useMediaQuery([
    "(max-width: 480px)",
    "(min-width: 641px)",
  ])

  const handleSlideChange = (swiper: SwiperType) => {
    const currentPage = swiper.activeIndex
    setSliderValue(currentPage)
  }

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    if (swiperInstance) {
      swiperInstance.slideTo(value)
    }
  }

  if (!episode) {
    router.push("/not-found")
    return null
  }

  const episodePages = episode.illustsCollection?.items ?? []
  const isOddFinish = episodePages.length % 2 !== 0

  const sliderOptions = {
    min: 0,
    max: episodePages.length,
    step: isTablet ? 2 : 1,
    defaultValue: 0,
  }

  return (
    <Box
      id="swiper-wrapper"
      height="100vh"
      bgColor="gray"
      position="relative"
      sx={{
        ".swiper-slide": {
          opacity: 0,
        },
        ".swiper.swiper-initialized ": {
          opacity: 1,
        },
        ".swiper-initialized .swiper-slide": {
          opacity: 1,
        },
        ".swiper-button-disabled ": {
          display: "none",
        },
      }}
      onClick={setSliderHidden}>
      <Swiper
        key={isMobile ? "mobile" : "tablet"}
        initialSlide={sliderValue}
        navigation={
          !isMobile
            ? {
                prevEl: "#button_prev",
                nextEl: "#button_next",
              }
            : undefined
        }
        modules={[Navigation]}
        style={{
          direction: "rtl",
          position: "relative",
          margin: "auto",
          width: "100%",
          height: "100vh",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
          },
        }}
        spaceBetween={0}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper)
          swiper.on("slideChange", () => handleSlideChange(swiper))
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}>
        {episodePages.map((page, index) => {
          const isOddSlide = index % 2 !== 0
          return (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: isTablet
                  ? isOddSlide
                    ? "flex-start"
                    : "flex-end"
                  : "center",
              }}>
              <Image
                src={page!.url!}
                alt={`Slide ${index + 1}`}
                height="calc(100vh - 30px)"
                maxHeight={"100vh"}
                objectFit="contain"
              />
            </SwiperSlide>
          )
        })}
        {/* スライド総数が奇数の場合、空白のスライドを追加 */}
        {isOddFinish && (
          <SwiperSlide>
            <Image src="" />
          </SwiperSlide>
        )}
      </Swiper>
      <HStack
        backgroundColor="black"
        zIndex={50}
        height="30px"
        position="absolute"
        bottom="0"
        width="100%"
        onClick={(e) => {
          e.stopPropagation()
        }}>
        {isSliderVisible && (
          <Slider
            value={sliderValue}
            height="100%"
            opacity="1"
            width="80%"
            left="10%"
            right="10%"
            backgroundColor={"gray.200"}
            _hover={{ opacity: 1 }}
            isReversed={true}
            zIndex={100}
            {...sliderOptions}
            onChange={(value) => handleSliderChange(value)}
            onMouseEnter={() => showTooltipOn()}
            onMouseLeave={() => showTooltipOff()}>
            <SliderTrack zIndex={100} height="100%">
              <Box position="absolute" zIndex={100} right={10} />
              <SliderFilledTrack bg="tomato" zIndex={100} />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`${sliderValue}ページ`}>
              <SliderThumb boxSize={6} zIndex={100} />
            </Tooltip>
          </Slider>
        )}
        <Box
          color="white"
          position="absolute"
          right="20px"
          onClick={(e) => {
            e.stopPropagation()
            toggleSliderVisible()
          }}>
          <RxSlider />
        </Box>
      </HStack>
      {!isMobile && ( //ページ送りボタン
        <>
          <Box
            id="button_next"
            className="swiper-button-prev"
            style={{
              width: "50%", //ページ送りボタンの範囲は片面
              height: "100vh",
              marginTop: "-50vh",
              justifyContent: "flex-start",
              color: "darkgray",
              backgroundColor: "transparent",
            }}
            bg="gray.200"
            opacity={0}
            _active={{ opacity: 1 }}
          />
          <Box
            id="button_prev"
            className="swiper-button-next"
            style={{
              width: "50%",
              height: "100vh",
              marginTop: "-50vh",
              justifyContent: "flex-end",
              color: "darkgray",
              backgroundColor: "transparent",
            }}
            bg="gray.200"
            opacity={0}
            _active={{ opacity: 1 }}
          />
        </>
      )}
    </Box>
  )
}
