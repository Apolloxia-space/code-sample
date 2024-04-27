type FcEnv = Readonly<{
  title: string
  description: string
  CONTENTFUL_TAGS: string // Contentfulから取得する用のタグ名
  HEADER_LIST: [
    { CONTENT: "NEWS"; DISPLAYNAME: string; LINK: string },
    { CONTENT: "EPISODE"; DISPLAYNAME: string; LINK: string },
  ]
}>
