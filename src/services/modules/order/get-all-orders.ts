import type { Order } from "@/types/order";
import { Api } from "../../api";

export async function getAllOrders() {
  const { data } = await Api.get<Order[]>('order')

  return data
}