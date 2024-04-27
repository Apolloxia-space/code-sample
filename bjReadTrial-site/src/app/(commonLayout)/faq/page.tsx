import { getQuestionGroups } from "src/infra/contentful/repositories/question"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react"
import { RichText } from "src/common/components/RichText/RichText"
import { QuestionGroup } from "src/infra/contentful/entities/question"
import { ContentsContainer } from "src/common/components/ContentsContainer/ContentsContainer"

const FaqPage = async () => {
  const questionGroups = await getQuestionGroups()

  // questionGroupsから質問と回答を取り出す
  const getFaqSections = (questionGroup: QuestionGroup) => {
    return questionGroup?.questionCollection?.items.map((question) => ({
      sectionId: questionGroup?.sys?.id,
      sectionName: questionGroup?.displayName,
      question: question?.question,
      answer: question?.answer,
    }))
  }

  const faqSections = questionGroups?.items.map((questionGroup) => {
    return getFaqSections(questionGroup)
  })

  return (
    <ContentsContainer>
      <Heading marginBottom="50px">FAQ</Heading>
      {faqSections?.map((faqSection, sectionIndex) => {
        return (
          <>
            {faqSection?.[0] && (
              <Heading as="h2" size="10px" marginBottom="20px">
                {faqSection[0].sectionName}
              </Heading>
            )}
            <Accordion key={sectionIndex} allowMultiple marginBottom="50px">
              {faqSection?.map((section, index) => {
                return (
                  <AccordionItem key={index}>
                    <Heading as="h3">
                      <AccordionButton paddingY="25px">
                        <Box flex="1" textAlign="left">
                          {section.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                      <RichText content={section.answer!.json} />
                    </AccordionPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </>
        )
      })}
    </ContentsContainer>
  )
}

export default FaqPage
