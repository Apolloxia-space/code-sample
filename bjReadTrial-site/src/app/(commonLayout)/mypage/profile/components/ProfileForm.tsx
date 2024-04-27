"use client"
import {
  Box,
  Button,
  HStack,
  VStack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  useBoolean,
  Heading,
} from "@chakra-ui/react"
import { supabase } from "src/libs/supabase/client/browserClient"
import { useForm } from "react-hook-form"
import NextLink from "next/link"

type FormInput = Props["userProfile"] & {
  name: string
  newEmail: string
  password: string
}

type Props = {
  userProfile: {
    id: string
    nickname: string
    email: string
    firstname: string
    lastname: string
    createdDate: string
  }
}

export const ProfileForm: React.FC<Props> = ({ userProfile }) => {
  const [isChangeEmail, setIsChangeEmail] = useBoolean(false)
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      ...userProfile,
      name: `${userProfile.lastname} ${userProfile.firstname}`,
      password: "defaultPassword",
    },
  })
  const onEmailSubmit = async (newData: FormInput) => {
    const { error } = await supabase.auth.updateUser({
      email: newData.newEmail,
    })

    if (error) {
      toast({
        title: "確認用メールを送信できませんでした",
        status: "error",
      })
      alert(error.message)
      return
    } else {
      toast({
        title: "確認用メールを送信しました",
        description:
          "メールアドレスの変更を完了するには、確認用メールを確認してください",
        status: "success",
      })
    }
  }

  const formListItem = {
    borderBottom: "1px solid black",
    padding: "50px 0px 10px",
    margin: "10px auto",
    width: ["300px", "500px"],
    cursor: "pointer",
  }

  return (
    <Box marginBottom="80px" paddingTop="80px">
      <Heading>Profile</Heading>
      <VStack spacing={4}>
        <FormControl isReadOnly {...formListItem}>
          <FormLabel>Id</FormLabel>
          <Input readOnly {...register("id")} border="none" />
        </FormControl>
        <FormControl isReadOnly {...formListItem}>
          <FormLabel>名前</FormLabel>
          <Input readOnly {...register("name")} border="none" />
        </FormControl>
        <FormControl isReadOnly {...formListItem}>
          <FormLabel>ニックネーム</FormLabel>
          <Input readOnly {...register("nickname")} border="none" />
        </FormControl>
        <FormControl isReadOnly isInvalid={!!errors.email} {...formListItem}>
          <FormLabel>Email</FormLabel>
          <HStack>
            <Input {...register("email")} border="none" />
            <Button onClick={setIsChangeEmail.on}>変更</Button>
          </HStack>
        </FormControl>
        <FormControl
          isInvalid={!!errors.newEmail}
          {...formListItem}
          display={isChangeEmail ? "block" : "none"}>
          <HStack>
            <Input
              {...register("newEmail", {
                required: "メールアドレスを入力してください",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "有効なEメールアドレスを入力してください",
                },
              })}
            />
            <Button type="submit" onClick={handleSubmit(onEmailSubmit)}>
              更新
            </Button>
          </HStack>
          <FormErrorMessage>
            {errors.newEmail && errors.newEmail.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isReadOnly {...formListItem}>
          <FormLabel>パスワード</FormLabel>
          <HStack>
            <Input
              readOnly
              {...register("password")}
              border="none"
              type="password"
            />
            <NextLink href={"/password/comfirmEmail"}>
              <Button>変更</Button>
            </NextLink>
          </HStack>
        </FormControl>
      </VStack>
    </Box>
  )
}
