export type Order = {
  id: number
  customer: string
  scheduledDate: Date | null
  tattooType: string
  tags: string[]
  paid: number
  price: number
  phone: string
  status: "PENDING" | "PROGRESS" | "CONCLUDED"
}