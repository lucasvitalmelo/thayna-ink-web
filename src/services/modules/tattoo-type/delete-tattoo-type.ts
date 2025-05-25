import { Api } from "../../api";

export async function deleteTattooType({ id }: { id: number }) {
  await Api.delete(`tattoo-type/${id}`)
}