import type { Dispatch, SetStateAction } from "react"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LoaderCircle } from "lucide-react"
import { useGetUniqueOrder } from "@/hooks/use-get-unique-order"

import { CustomerInfo } from "./customer-info"
import { ScheduleForm } from "./schedule-form"
import { TattooDetails } from "./tattoo-details"
import { DescriptionForm } from "./description-form"
import { PaymentsForm } from "./payments-form"
import { Tags } from "./tags"
import { StatusSwitch } from "./status-switch"
import { PaymentsTable } from "./payments-form/payments-table"

type OrderDetailsProps = {
  orderId: number
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function OrderDetailsDialog({ orderId, isOpen, setIsOpen }: OrderDetailsProps) {
  const { data: order, isLoading } = useGetUniqueOrder({ orderId, isOpenDialog: isOpen })

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="pr-0">
        <DialogHeader className="border-b pb-2 pr-6">
          <DialogTitle>Order details</DialogTitle>
          <DialogDescription>View, edit, and add information related to an order.</DialogDescription>
        </DialogHeader>
        <div className="overflow-auto h-[calc(100vh-410px)] pr-6">


          {isLoading ? (
            <div className="mx-auto">
              <LoaderCircle size={16} className="animate-spin" />
            </div>
          ) : order && (
            <>
              <div className="flex flex-col gap-1.5">
                <div className="flex">
                  <CustomerInfo customer={order.customer} />

                  <div className="ml-auto">
                    <StatusSwitch
                      orderId={order.id}
                      status={order.status}
                    />
                  </div>

                </div>

                <ScheduleForm date={order.scheduledDate} orderId={order.id} />

              </div>

              <TattooDetails
                location={order.bodyLocation}
                width={order.width}
                height={order.height}
              />

              <Tags tags={order.tags} orderId={order.id} />

              <DescriptionForm
                orderId={order.id}
                description={order.description}
              />

              <PaymentsForm orderId={order.id} />
              <PaymentsTable payments={order.payments} orderId={order.id} />
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
