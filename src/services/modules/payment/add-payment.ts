import { Api } from "@/services/api";

type Payment = {
  orderId: number,
  description: string,
  amount: number
}

export async function addPayment({ orderId, description, amount }: Payment) {
  await Api.post('payment', {
    orderId,
    description,
    amount
  })
}