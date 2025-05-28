import type { Customer } from "./customer"
import type { Payment } from "./payment"

export type OrderDatails = {
  id: number
  customer: Customer
  scheduledDate: Date | null
  tattooType: string
  bodyLocation: string
  payments: Payment[]
  tags: string[]
  paid: number
  price: number
  phone: string
  description: string | null
  width: number
  height: number
  status: "PENDING" | "PROGRESS" | "CONCLUDED"
}