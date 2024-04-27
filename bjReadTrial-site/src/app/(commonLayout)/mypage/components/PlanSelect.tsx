"use client"
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Box,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react"
import { FC } from "react"
import { useForm, Controller } from "react-hook-form"
import { SubscriptionPlans } from "src/infra/contentful/entities/subscriptionPlan"
import { getStripe } from "src/libs/stripe/util/stripeClient"

type PlanSelectProps = {
  subscriptionPlans: SubscriptionPlans
}
type Inputs = {
  planId: string
}

export const PlanSelect: FC<PlanSelectProps> = ({ subscriptionPlans }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  if (!subscriptionPlans) return

  const getStripeSession = async (data: Inputs) => {
    const result = await fetch("/api/payment/createCheckoutSession", {
      method: "POST",
      body: JSON.stringify({ planId: data.planId }),
    })

    const { sessionId } = await result.json()

    const stripe = await getStripe()
    stripe?.redirectToCheckout({ sessionId })
    return
  }

  const subscriptionPlanDetail = subscriptionPlans?.items.map(
    (subscriptionPlan) => {
      if (!subscriptionPlan) return
      return {
        planId: subscriptionPlan.planId || "",
        displayname: subscriptionPlan.displayName || "",
        price: subscriptionPlan.price || "",
        displayOrder: subscriptionPlan.displayOrder || 0,
        membershipName: subscriptionPlan.membershipName || "",
      }
    },
  )

  return (
    <Box as="form" onSubmit={handleSubmit(getStripeSession)}>
      <FormControl isInvalid={!!errors.planId}>
        <FormLabel htmlFor="planId">プランを選択</FormLabel>
        <Controller
          name="planId"
          control={control}
          rules={{ required: "This is required" }}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Stack spacing={4} direction="row">
                {subscriptionPlanDetail.map((plan) => {
                  if (!plan) return
                  return (
                    <Box
                      key={plan.planId}
                      borderRadius="10px"
                      width="100px"
                      border="2px solid black">
                      <Radio value={plan.planId} width="100%">
                        <Box>{plan.displayname}</Box>
                      </Radio>
                    </Box>
                  )
                })}
              </Stack>
            </RadioGroup>
          )}
        />
        <FormErrorMessage>
          {errors.planId && errors.planId.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        お支払いに進む
      </Button>
    </Box>
  )
}
