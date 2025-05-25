import { Api } from "../../api";

type Tags = {
  id: number
  name: string,
}

export async function getAllTags() {
  const { data } = await Api.get<Tags[]>(`tags`)

  return data
}