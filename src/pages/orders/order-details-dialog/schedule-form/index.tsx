import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUpdateOrder } from "@/hooks/use-update-order"
import { CalendarCheck2, CalendarSync, LoaderIcon } from "lucide-react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"

type ScheduleInfoProps = {
  date: Date | null
  orderId: number
}

const scheduleSchema = z.object({
  date: z
    .string()
    .min(1),
})

type ScheduleFormData = z.infer<typeof scheduleSchema>

export function ScheduleForm({ date, orderId }: ScheduleInfoProps) {
  const { mutate, isPending } = useUpdateOrder({ orderId })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      date: date ? new Date(date).toISOString().slice(0, 16) : "",
    },
  })

  useEffect(() => {
    if (date) {
      const formatted = new Date(date).toISOString().slice(0, 16)
      setValue("date", formatted)
    }
  }, [date, setValue])

  function onSubmit({ date }: ScheduleFormData) {
    const parsedDate = new Date(date)
    mutate({ scheduledDate: parsedDate })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-fit items-center gap-2 mb-3">
      <CalendarCheck2 size={28} />
      <Input
        type="datetime-local"
        {...register("date")}
        className={errors.date ? "border-red-500" : ""}
      />
      <Button type="submit" variant="secondary" size="icon">
        {isPending ? <LoaderIcon className="animate-spin" /> : <CalendarSync />}
      </Button>
    </form>
  )
}
