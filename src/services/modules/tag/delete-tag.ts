import { Api } from "../../api";

export async function deleteTag({ id }: { id: number }) {
  await Api.delete(`tags/${id}`)
}