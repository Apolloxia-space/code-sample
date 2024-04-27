"use client"
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"

export const SignOutModal = ({
  onClose,
  isOpen,
  handleClickSignOut,
}: {
  onClose: () => void
  isOpen: boolean
  handleClickSignOut: () => Promise<void>
}) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" mb="1rem">
            サインアウトしますか？
          </Text>
          {/* <Lorem count={2} /> */}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            いいえ
          </Button>
          <Button variant="ghost" onClick={handleClickSignOut}>
            はい
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
