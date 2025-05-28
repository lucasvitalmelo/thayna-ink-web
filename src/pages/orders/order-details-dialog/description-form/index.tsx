import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { TypographyMuted } from "@/utils/typography/typography"
import { Button } from "@/components/ui/button"
import { LoaderCircle, Save } from "lucide-react"
import { useUpdateOrder } from "@/hooks/use-update-order"
import { useEffect } from "react"

const descriptionSchema = z.object({
  description: z.string().max(52),
})

type DescriptionSchema = z.infer<typeof descriptionSchema>

export function DescriptionForm({
  orderId,
  description,
}: {
  orderId: number
  description: string | null
}) {
  const { mutate, isPending } = useUpdateOrder({ orderId })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DescriptionSchema>({
    resolver: zodResolver(descriptionSchema),
    defaultValues: { description: description ?? "" },
  })

  useEffect(() => {
    reset({ description: description ?? "" })
  }, [description, reset])

  const onSubmit = (data: DescriptionSchema) => {
    mutate({ description: data.description })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
      <TypographyMuted text="Description" />

      <div className="flex gap-2 mt-2">
        <div className="flex-1">
          <Input
            isError={!!errors.description}
            maxLength={52}
            placeholder="describe in a few words..."
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <Button
          size="icon"
          type="submit"
          disabled={isPending}
        >
          {
            isPending ?
              <LoaderCircle className="animate-spin" />
              :
              <Save className="w-4 h-4" />
          }
        </Button>
      </div>
    </form>
  )
}
