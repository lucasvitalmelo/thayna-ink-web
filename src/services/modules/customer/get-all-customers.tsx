import { Api } from "../../api";
import type { Customer } from "@/types/customer";

export async function getAllCustomers() {
  const { data } = await Api.get<Customer[]>('customer')

  return data
}