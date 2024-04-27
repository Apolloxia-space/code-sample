import { VStack, Box } from "@chakra-ui/react"
import { Profile } from "./components/Profile"
import { Suspense } from "react"

const ProfilePage = async () => {
  return (
    <Box>
      <VStack spacing={4}>
        <Suspense fallback="ローディング">
          <Profile />
        </Suspense>
      </VStack>
    </Box>
  )
}

export default ProfilePage
