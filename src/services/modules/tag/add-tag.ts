import { Api } from "../../api";

type AddTag = {
  name: string,
}

export async function addTag({ name }: AddTag) {
  await Api.post(`tags`, {
    name,
  })
}