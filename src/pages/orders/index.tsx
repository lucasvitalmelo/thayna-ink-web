import { Order } from "@/components/order"
import { OrderFormDialog } from "@/components/new-order-form-dialog"
import { LoaderCircle } from "lucide-react"

import { useGetAllOrders } from "@/hooks/get-all-orders"

export function Orders() {
  const { data: orders, isLoading } = useGetAllOrders()
  return (
    <div>
      <section className="flex w-full items-center justify-center overflow-auto">
        <div className="flex flex-col gap-2 max-w-7xl w-full items-end mx-5 h-[calc(100vh-100px)]">
          <OrderFormDialog />
          {isLoading &&
            <div className="flex justify-center w-full"
            >
              <LoaderCircle size={16} className="animate-spin" />
            </div>
          }

          {
            orders?.map(order =>
              <>
                <Order
                  {...order}
                />
                <Order
                  {...order}
                />
              </>
            )
          }
        </div>
      </section>


    </div>
  )
}

