export type Order = {
  id: number
  customer: string
  scheduleDate: Date | null
  tattooType: string
  tags: string[]
  paid: number
  price: number
  phone: string
}