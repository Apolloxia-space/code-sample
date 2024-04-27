/** 年、月、日を取得する関数
 * @param {Date} publishTime - 公開日時
 * @returns {string} - 年/月/日の形式の文字列
 */
export const formatDate = (publishTime: Date) => {
  const publishDate = new Date(publishTime)
  const year = publishDate.getFullYear()
  const month = publishDate.getMonth() + 1 // JavaScriptの月は0から始まるため、+1する
  const day = publishDate.getDate()
  return `${year}/${month}/${day}`
}
