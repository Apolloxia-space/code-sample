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
  newPassword: string
}

const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()
  const handleResetPassword = async ({ newPassword }: FormInput) => {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    if (error) {
      alert(error.message)
      return
    }

    if (data) {
      alert("パスワードリセットしました")
    }
  }

  return (
    <Box>
      <VStack
        spacing={4}
        as="form"
        onSubmit={handleSubmit(handleResetPassword)}>
        <FormControl isInvalid={!!errors.newPassword}>
          <FormLabel htmlFor="password">パスワード</FormLabel>
          <Input
            id="password"
            type="password"
            {...register("newPassword", {
              required: "パスワードは必須です",
              minLength: {
                value: 6,
                message: "パスワードは6文字以上である必要があります",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
                message:
                  "パスワードは半角英数をそれぞれ1文字以上含む必要があります",
              },
            })}
          />
          {errors.newPassword && (
            <Text color="red.500">{errors.newPassword.message}</Text>
          )}
        </FormControl>
        <Button colorScheme="blue" type="submit">
          パスワードをリセットする
        </Button>
      </VStack>
    </Box>
  )
}

export default PasswordReset
