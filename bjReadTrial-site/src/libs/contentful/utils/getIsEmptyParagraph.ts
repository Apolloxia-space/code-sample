import { Block, Inline } from "@contentful/rich-text-types"

/**
 * FCの管理画面 もしくは contentfulの管理画面 で空行で入力した空行かどうかを判別する
 */
export const getIsEmptyParagraph = (node: Block | Inline) => {
  // FCの管理画面で空行を入力した場合
  const isFcAdminEmptyParagraph = node.content.length === 0

  // node.contentをループさせてvalueが全て空文字だった場合はcontentfulの管理画面で空行を入力したと判定する
  const isConrentfulAdminEmptyParagraph = node.content.every((node) => {
    return node.nodeType === "text" && node.value === ""
  })

  return isFcAdminEmptyParagraph || isConrentfulAdminEmptyParagraph
}
