import type { Status } from "@/types/status";
import { Api } from "../../api";

type AddOrder = {
  customerId: number,
  bodyLocation: string,
  width: number,
  height: number,
  price: number,
  status: Status
}

export async function addOrder(props: AddOrder) {
  await Api.post(`order`, {
    ...props
  })
}