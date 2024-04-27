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
  id: string
  firstName: string
  lastName: string
  kana: string
  nickname: string
  created_at?: string
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()
  const router = useRouter()

  const onSubmit = async ({
    firstName,
    lastName,
    kana,
    nickname,
  }: FormInput) => {
    const { data: userData, error: isAuthError } = await supabase.auth.getUser()

    if (isAuthError) {
      router.push("/")
      return
    }

    const { data: createdProfile, error: isCreateProfileError } = await supabase
      .from("mst_user_profile")
      .insert([
        {
          id: `${userData.user?.id}`,
          firstname: `${firstName}`,
          lastname: `${lastName}`,
          kana: `${kana}`,
          nickname: `${nickname}`,
        },
      ])
      .select()

    if (isCreateProfileError) {
      Toast({
        description: "プロフィールの作成に失敗しました",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      return
    }

    if (createdProfile) {
      Toast({
        description: "プロフィールを作成しました",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      router.push("/signUp/complete")
      return
    }
  }

  return (
    <Box onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <FormControl isInvalid={!!errors.lastName}>
          <FormLabel htmlFor="lastName">性</FormLabel>
          <Input
            id="lastName"
            {...register("lastName", {
              required: "姓は必須です",
              pattern: {
                value: /^[ぁ-ん一-龥a-zA-Z]+$/,
                message: "記号、数字は使用できません",
              },
            })}
          />
          {errors.lastName && (
            <Text color="red.500">{errors.lastName.message}</Text>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.firstName}>
          <FormLabel htmlFor="firstName">名</FormLabel>
          <Input
            id="firstName"
            {...register("firstName", {
              required: "名前は必須です",
              pattern: {
                value: /^[ぁ-んァ-ン一-龥a-zA-Z]+$/,
                message: "記号、数字は使用できません",
              },
            })}
          />
          {errors.firstName && (
            <Text color="red.500">{errors.firstName.message}</Text>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.kana}>
          <FormLabel htmlFor="kana">カナ</FormLabel>
          <Input
            id="kana"
            type="kana"
            {...register("kana", {
              required: "カナは必須です",
              pattern: {
                value: /^[ァ-ン一\u30FC]+$/,
                message: "カタカナである必要があります",
              },
            })}
          />
          {errors.kana && <Text color="red.500">{errors.kana.message}</Text>}
        </FormControl>
        <FormControl isInvalid={!!errors.nickname}>
          <FormLabel htmlFor="nickname">ニックネーム</FormLabel>
          <Input
            id="nickname"
            {...register("nickname", {
              required: "ニックネームは必須です",
              maxLength: {
                value: 15,
                message: "ニックネームは15文字以内である必要があります",
              },
            })}
          />
          {errors.nickname && (
            <Text color="red.500">{errors.nickname.message}</Text>
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
