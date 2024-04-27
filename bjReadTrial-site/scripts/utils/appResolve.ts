import { realpathSync } from "fs"
import { resolve } from "path"

const appDirectory = realpathSync(process.cwd())

/**
 * ルートからプロジェクトへのパスに、引数でもらったパスを繋げたパスを返す
 */
export const appResolve = (paths: string): string => {
  return resolve(appDirectory, paths)
}
