import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

const statusVariants = cva(
  "py-0.5 rounded-full px-4 border border-yellow-500 text-yellow-500",
  {
    variants: {
      variant: {
        PROGRESS:
          "border-yellow-500 text-yellow-500",
        PENDING:
          "border-blue-500 text-blue-500",
        CONCLUDED:
          "border-green-500 text-green-500",
      },

    },
  }
)

const statusValues = {
  "PENDING": "Pendente",
  "PROGRESS": "Progresso",
  "CONCLUDED": "Concluído"
}

type StatusProps = ComponentProps<"span">
  & VariantProps<typeof statusVariants>
  & { value: "PROGRESS" | "PENDING" | "CONCLUDED" }

export function Status({ value, ...props }: StatusProps) {

  const variant = value

  return (
    <span
      className={cn(statusVariants({ variant }))}
      {...props}
    >
      {statusValues[value!]}
    </span>
  )
}