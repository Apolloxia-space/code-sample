import { existsSync, rmSync } from "fs"

/**
 * 対象のパスにファイルやディレクトリが存在しているなら削除する
 */
export const rmSyncIfAlreadyExists = (path: string): void => {
  if (!existsSync(path)) {
    return
  }

  rmSync(path, { recursive: true, force: true })
}
