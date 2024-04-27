import { extendTheme } from "@chakra-ui/react"
import { components } from "./components"

export const theme = extendTheme({
  components,
  colors: {
    primary: "#F08361",
    secondary: "#F0B57F",
    tertiary: "#E8473D",
    textPrimary: "#554651",
    textSecondary: "#BBA8A3",
    textTertiary: "#A06F5F",
    textQuaternary: "#FC693B",
    textQuinary: "#FFFFFF",
    titlePrimary: "#F08361",
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F8F3F2",
    backgroundTertiary: "#FBF7F6",
    backgroundQuaternary: "#FFFFFF",
    borderPrimary: "#EBCEC1",
    iconPrimary: "#FFFFFF",
    badge: "#FC693B",
    badgeLive: "#E8473D",
    logoPrimary: "",
    logoSecondary: "#F08361",
    logoTertiary: "#FFFFFF",
    logoLpPrimary: "#FFFFFF",
    logoLpSecondary: "#FFFFFF",
  },
  fonts: {
    body: "Montserrat, Roboto Condensed, Proxima Nova, Verdana, 游ゴシック, YuGothic, Meiryo, sans-serif",
  },
})
