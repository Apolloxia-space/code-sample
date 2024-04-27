/**
 * UTC時間を日本時間（JST）に変換し、年月日を取得する関数
 * @param {string} utcTimestamp - UTC形式のタイムスタンプ
 * @returns {string} - 年-月-日の形式の文字列（日本時間）
 */
export const convertToJST = (utcTimestamp: string): string => {
  // UTC時間をDateオブジェクトに変換
  const date = new Date(utcTimestamp)

  // UTCからJST（UTC+9）に変換
  date.setHours(date.getUTCHours() + 9)

  // 年月日を取得
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // JavaScriptの月は0-11なので1加える
  const day = date.getDate()

  // YYYY-MM-DD形式の文字列を返す
  return `${year}年${month.toString().padStart(2, "0")}月${day
    .toString()
    .padStart(2, "0")}日`
}

export const toDateTime = (secs: number) => {
  const time = new Date("1970-01-01T00:00:00Z") // Unix epoch start in UTC
  const offset = 32400 // JSTのオフセット秒
  time.setSeconds(secs + offset) // JSTに変換
  return time
}
