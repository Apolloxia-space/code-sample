"use client"
import { useForm } from "react-hook-form"
import {
  Button,
  Input,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react"
import { supabase } from "src/libs/supabase/client/browserClient"

type FormInput = {
  email: string
  password: string
}

const ComfirmEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()

  const handleResetPassword = async ({ email }: { email: string }) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/password/reset`,
    })
    if (error) {
      alert(error.message)
      return
    }

    if (data) {
      alert("パスワードリセットメールを送信しました")
    }
  }

  return (
    <Box>
      <VStack
        spacing={4}
        as="form"
        onSubmit={handleSubmit(handleResetPassword)}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Eメール</FormLabel>
          <Input
            id="email"
            {...register("email", {
              required: "Eメールは必須です",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "有効なEメールアドレスを入力してください",
              },
            })}
          />
          {errors.email && <Text color="red.500">{errors.email.message}</Text>}
        </FormControl>
        <Button colorScheme="blue" type="submit">
          パスワードリセットメールを送信する
        </Button>
      </VStack>
    </Box>
  )
}

export default ComfirmEmail
