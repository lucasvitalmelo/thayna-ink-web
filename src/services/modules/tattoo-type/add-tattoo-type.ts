import { Api } from "../../api";

export async function addTattoType({ name }: { name: string }) {
  await Api.post(`tattoo-type`, {
    name,
  })
}