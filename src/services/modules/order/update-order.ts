import type { Status } from "@/types/status";
import { Api } from "../../api";

type UpdateOrder = {
  orderId: number,
  bodyLocation?: string,
  width?: number,
  height?: number,
  price?: number,
  status?: Status
  scheduledDate?: Date | null
  tags?: string[],
  description?: string | null
}

export async function updateOrder({ orderId, ...props }: UpdateOrder) {
  await Api.patch(`order/${orderId}`, {
    ...props
  })
}