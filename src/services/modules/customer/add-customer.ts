import { Api } from "../../api";

type DeleteCustomer = {
  name: string,
  phone: string,
  email: string,
  age: Date
}

export async function addCustomer({ age, email, name, phone }: DeleteCustomer) {
  await Api.post(`customer`, {
    name,
    age,
    phone,
    email
  })
}