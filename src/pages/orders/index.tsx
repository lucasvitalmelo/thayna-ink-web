import { TypographyH2 } from "@/utils/typography/typography"
import { OrderTable } from "./order-table"
import { OrderFormDialog } from "./order-form-dialog"


export function Orders() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex ">

        <TypographyH2 border={false} text="Orders" />
        <OrderFormDialog />
      </div>
      <OrderTable />
    </div>
  )
}

