import { Api } from "../../api";

type TattooType = {
  id: number
  name: string,
}

export async function getAllTattooTypes() {
  const { data } = await Api.get<TattooType[]>(`tattoo-type`)

  return data
}