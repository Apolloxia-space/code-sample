/* eslint-disable no-console */

import { existsSync, readdirSync } from "fs"
import { resolve } from "path"
import { config } from "dotenv"
import { copySync } from "fs-extra"
import { rmSyncIfAlreadyExists } from "../utils/rmSyncIfAlreadyExists"
import { appResolve } from "../utils/appResolve"

export const getIsProduction = () => {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
}

const isLocal = process.env.VERCEL_ENV === undefined
const isProduction = getIsProduction()
const envPath = isProduction ? "prd" : "dev"
const resourcesDirPath: string = appResolve("resources")

if (isLocal) {
  // vercel環境下でないのなら.envの値を利用する
  config({
    path: appResolve(".env"),
  })
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_CODE

/**
 * resolveした値を検証した後、値を返却します
 */
const resolvePath = (...path: string[]) => {
  const resolved = resolve(...path)

  console.log("resolvePath:", resolved)

  if (!existsSync(resolved)) {
    console.error(`The path is not exists: ${resolved}`)
    throw new Error()
  }

  return resolved
}

/**
 * resolveした値を検証した後、存在するならパスを返し、存在しないならnullを返します
 */
const resolvePathOrNull = (...path: string[]) => {
  const resolved = resolve(...path)

  if (!existsSync(resolved)) {
    return null
  }

  return resolved
}

/**
 * projectIdから対象のコピーするパスの取得
 */
const getTargetResourcePaths = () => {
  if (projectId === undefined) {
    throw new Error("'process.env.NEXT_PUBLIC_PROJECT_CODE' is undefined")
  }
  const supportedProjectIds = readdirSync(resourcesDirPath, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isDirectory())
    .map(({ name }) => name)

  // 環境変数のNEXT_PUBLIC_PROJECT_CODEがサポートされているProjectIdか確認
  if (!supportedProjectIds.includes(projectId)) {
    console.info(
      "Available projectIds",
      supportedProjectIds.map((t) => `\n - ${t}`).join(),
    )
    throw new Error(`Invalid projectId is specified: ${projectId}`)
  }

  // コピーするpublicフォルダのpathを取得
  const publicPath = resolvePath(resourcesDirPath, projectId, "public")

  // コピーするfcEnvPath.tsのpathを取得
  const fcEnvPath = resolvePath(
    resourcesDirPath,
    projectId,
    envPath,
    "fcEnv.ts",
  )

  // コピーするthemeフォルダのpathを取得
  const themesPath = resolvePath(
    resourcesDirPath,
    projectId,
    "commons",
    "themes",
  )

  // コピーするmiddlewareファイルのpathか、nullを取得
  const middlewarePath = resolvePathOrNull(
    resourcesDirPath,
    projectId,
    "commons",
    "middleware",
    "middleware.ts",
  )

  return {
    publicPath,
    fcEnvPath,
    themesPath,
    middlewarePath,
  }
}

/**
 * リソースのコピーを実行
 */
const copyResource = () => {
  console.info(`Specified projectId: ${projectId}`)
  const { publicPath, fcEnvPath, themesPath, middlewarePath } =
    getTargetResourcePaths()

  // publicフォルダのコピーを実行
  const publicDistPath: string = appResolve("public")
  rmSyncIfAlreadyExists(publicDistPath)
  copySync(publicPath, publicDistPath)
  console.info("Copy 'public': ", publicPath, "=>", publicDistPath)

  const srcDistPath: string = appResolve("src/copied")

  // 環境変数のコピー
  rmSyncIfAlreadyExists(srcDistPath)
  const fcEnvDistPath: string = resolve(srcDistPath, "fcEnv.ts")
  copySync(fcEnvPath, fcEnvDistPath)
  console.info("Copy 'fcEnv': ", fcEnvPath, "=>", fcEnvDistPath)

  // テーマのコピー
  const themesDistPath: string = appResolve("src/copied/themes")
  rmSyncIfAlreadyExists(themesDistPath)
  copySync(themesPath, themesDistPath)
  console.info("Copy 'themes': ", themesPath, "=>", themesDistPath)

  // middleware.tsがあればコピーする
  if (middlewarePath) {
    const middlewareDistPath: string = appResolve("src/middleware.ts")
    rmSyncIfAlreadyExists(middlewareDistPath)
    copySync(middlewarePath, middlewareDistPath)
    console.info(
      "Copy 'middleware': ",
      middlewarePath,
      "=>",
      middlewareDistPath,
    )
  }
}

copyResource()
