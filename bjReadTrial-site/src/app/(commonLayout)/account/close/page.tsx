import { CloseAccount } from "src/app/(commonLayout)/account/components/CloseAccount"
import { getText } from "src/infra/contentful/repositories/text"
import { Textarea } from "@chakra-ui/react"
import { ContentsContainer } from "src/common/components/ContentsContainer/ContentsContainer"

const CloseAccountPage = async () => {
  const text = await getText("close_account")

  return (
    <ContentsContainer>
      <Textarea
        readOnly
        height="500px"
        defaultValue={text!.items[0]!.description!}
        marginBottom="100px"
      />
      <CloseAccount />
    </ContentsContainer>
  )
}
export default CloseAccountPage
