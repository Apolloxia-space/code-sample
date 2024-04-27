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
  Toast,
} from "@chakra-ui/react"
import { supabase } from "src/libs/supabase/client/browserClient"
import { useRouter } from "next/navigation"

type FormInput = {
  email: string
  password: string
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()
  const router = useRouter()

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    const { data } = await supabase.auth.signUp({
      email,
      password,
    })
    if (data) {
      Toast({
        description: "アカウントを作成しました",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      router.push("/signUp/profile")
      return
    }
  }

  return (
    <Box onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
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

        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">パスワード</FormLabel>
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: "パスワードは必須です",
              minLength: {
                value: 8,
                message: "パスワードは8文字以上である必要があります",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
                message:
                  "パスワードは半角英数をそれぞれ1文字以上含む必要があります",
              },
            })}
          />
          {errors.password && (
            <Text color="red.500">{errors.password.message}</Text>
          )}
        </FormControl>

        <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
          次へ
        </Button>
      </VStack>
    </Box>
  )
}

export default SignUp
