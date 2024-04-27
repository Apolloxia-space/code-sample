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
import { useAuthStatusStore } from "src/utils/auth/useAuthStatusStore"
import Link from "next/link"
import { useAuthToast } from "src/libs/supabase/hooks/useAuthToast"
import { useRouter } from "next/navigation"

type FormInput = {
  email: string
  password: string
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()
  const router = useRouter()

  const { login } = useAuthStatusStore()
  const authToast = useAuthToast("signIn")

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    const { statusCode } = await login(email, password)
    authToast(statusCode!)
    if (statusCode === 200) {
      router.push("/")
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
          ログイン
        </Button>
        <Link href="/password/comfirmEmail">
          <Text>パスワードを忘れた方はこちら</Text>
        </Link>
      </VStack>
    </Box>
  )
}

export default SignIn
