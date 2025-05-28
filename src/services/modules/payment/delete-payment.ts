import { Api } from "@/services/api";

export async function deletePayment({ paymentId }: { paymentId: number }) {
  await Api.delete(`payment/${paymentId}`)
}