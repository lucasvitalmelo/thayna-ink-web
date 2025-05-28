import { Status } from "@/components/status";
import { useUpdateOrder } from "@/hooks/use-update-order";
import type { Status as StatusTypes } from "@/types/status";
import { twMerge } from "tailwind-merge";

export function StatusSwitch({ status, orderId }: { status: StatusTypes, orderId: number }) {
  const { mutate } = useUpdateOrder({ orderId })

  return (
    <div className="flex flex-col gap-2">
      <Status
        onClick={() => mutate({ status: "PENDING" })}
        className={twMerge(
          `${status !== "PENDING" && 'opacity-20'}`, 'hover:opacity-80 transition-all cursor-pointer'
        )}
        value="PENDING"
      />

      <Status
        onClick={() => mutate({ status: "PROGRESS" })}
        className={twMerge(
          `${status !== "PROGRESS" && 'opacity-20'}`, 'hover:opacity-80 transition-all cursor-pointer'
        )}
        value="PROGRESS"
      />

      <Status
        onClick={() => mutate({ status: "CONCLUDED" })}
        className={twMerge(
          `${status !== "CONCLUDED" && 'opacity-20'}`, 'hover:opacity-80 transition-all cursor-pointer'
        )}
        value="CONCLUDED"
      />

    </div>
  )
}