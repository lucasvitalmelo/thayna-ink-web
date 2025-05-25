import { Api } from "../../api";

export async function deleteCustomer({ id }: { id: number }) {
  await Api.delete(`customer/${id}`)
}