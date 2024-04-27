import { Provider } from "src/app/provider"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AppContainer } from "src/common/components/AppContainer/AppContainer"
import "swiper/css"
import "swiper/css/navigation"
import { getImage } from "src/infra/contentful/repositories/image"
import { FC_ENV } from "src/copied/fcEnv"

const inter = Inter({ subsets: ["latin"] })

export const revalidate = 3600

export const generateMetadata = async (): Promise<Metadata> => {
  const ogImage = await getImage("ogImage")
  return {
    title: FC_ENV.title,
    description: FC_ENV.description,
    openGraph: {
      title: FC_ENV.title,
      description: FC_ENV.description,
      images: [
        {
          url: ogImage?.items[0]?.image?.url as string,
          width: ogImage?.items[0]?.image?.width as number,
          height: ogImage?.items[0]?.image?.height as number,
          alt: "「ブラックジャックによろしく」ファンクラブ",
        },
      ],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <AppContainer isTopPage={true}>{children}</AppContainer>
        </Provider>
      </body>
    </html>
  )
}
