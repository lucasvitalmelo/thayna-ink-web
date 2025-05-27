import type { OrderDatails } from "@/types/order-details";
import { Api } from "../../api";

export async function getUniqueOrder({ id }: { id: number }) {
  const { data } = await Api.get<OrderDatails>(`order/${id}`)

  return data
}