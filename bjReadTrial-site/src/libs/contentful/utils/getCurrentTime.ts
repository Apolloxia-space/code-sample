export const getCurrentTime = () => {
  // 現在のUTC時間を取得
  const now = new Date()

  const offset = 9 // UTC+9:00

  const localTime = new Date(now.getTime() + offset * 60 * 60 * 1000)

  // ローカル時間をISO 8601形式に変換
  const currentTime = localTime.toISOString()

  // ISO 8601形式のローカル時間を返す
  return currentTime
}
