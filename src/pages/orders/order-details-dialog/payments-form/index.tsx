import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { CurrencyInput } from "@/components/currency-input"
import { TypographyMuted } from "@/utils/typography/typography"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle } from "lucide-react"

import { useAddPayment } from "@/hooks/use-add-payment"

const paymentSchema = z.object({
  description: z.string().min(1).max(20),
  amount: z.number().positive(),
})

type PaymentSchema = z.infer<typeof paymentSchema>

export function PaymentsForm({ orderId }: { orderId: number }) {
  const { mutate } = useAddPayment({ orderId })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PaymentSchema>({
    resolver: zodResolver(paymentSchema),

  })

  const onSubmit = (data: PaymentSchema) => {
    mutate(data)
    reset({
      description: "",
      amount: 0,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TypographyMuted text="Payments" />
      <div className="flex gap-2 mt-2 items-start">
        <Input
          className="flex-1"
          isError={!!errors.description}
          maxLength={30}
          placeholder="Describe..."
          {...register("description")}
        />
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <CurrencyInput
              className="w-30"
              value={field.value}
              onChange={field.onChange}
              placeholder="Amount"
              isError={!!errors.amount}
            />
          )}
        />
        <Button type="submit" size="icon">
          <PlusCircle />
        </Button>
      </div>
    </form>
  )
}
