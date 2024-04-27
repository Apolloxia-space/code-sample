"use client"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "src/copied/themes"
import { CacheProvider } from "@chakra-ui/next-js"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
// import Me from "src/common/components/Me/me"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
    },
  },
})

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <CacheProvider>
          {/* <Me /> */}
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </ReactQueryStreamedHydration>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}
