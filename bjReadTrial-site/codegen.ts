import type { CodegenConfig } from "@graphql-codegen/cli"
import { config as dotenvConfig } from "dotenv"

dotenvConfig()

//prettier-ignore
const contentfulSchema = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID!}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN!}`
// const supabaseSchema = `https://${process.env.SUPABASE_REFERENCE_ID}.supabase.co/graphql/v1?apikey=${process.env.SUPABASE_APIKEY}`

//contentfulからスキーマを取得して、graphql-codegenで型定義を生成する設定
const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "src/infra/contentful/generated/": {
      schema: contentfulSchema,
      documents: "src/infra/contentful/query/**/*.graphql",
      preset: "client",
      plugins: [],
    },
    // "src/infra/supabase/generated/": {
    //   schema: supabaseSchema,
    //   documents: "src/infra/supabase/query/**/*.graphql",
    //   preset: "client",
    //   plugins: [],
    // },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  config: {
    skipTypename: true,
    avoidOptionals: {
      field: true,
      inputValue: true,
      object: true,
      defaultValue: true,
    },
  },
}

export default config
