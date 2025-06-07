import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetAllOrders } from "@/hooks/use-get-all-orders"
import { formatCurrency } from "@/utils/format-currency"
import { Banknote, HandCoins, LoaderCircle } from "lucide-react"
import { useState } from "react"
import { Status } from "@/components/status"
import { OrderDetailsDialog } from "../order-details-dialog"
import { formatDateTime } from "@/utils/formatDate"
import { Badge } from "@/components/ui/badge"
import { useOpenWhatsApp } from "@/hooks/use-open-whatsapp"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function OrderTable() {
  const { data: orders, isLoading } = useGetAllOrders()

  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null)
  const [isOpenOrderDetails, setIsOpenOrderDetails] = useState(false)

  const { openChat } = useOpenWhatsApp()

  return (
    <>
      <Table>
        <TableCaption>
          {isLoading ?
            <div className="flex justify-center w-full"
            >
              <LoaderCircle size={16} className="animate-spin" />
            </div>
            :
            <span>
              A list of your recent orders.
            </span>
          }
        </TableCaption>

        <TableHeader>
          <TableRow className="flex">
            <TableHead className="flex-1">Name</TableHead>
            <TableHead className="flex-1 hidden lg:block">Tattoo type</TableHead>
            <TableHead className="flex-1 ">Schedule</TableHead>
            <TableHead className="flex-1 hidden lg:block">Phone</TableHead>
            <TableHead className="flex-1 hidden lg:block">Status</TableHead>
            <TableHead className="flex-1">Amount</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>

          {
            orders?.map(order => {
              const schedule = order.scheduledDate ? formatDateTime(order.scheduledDate) : '---'

              return (
                <TableRow
                  key={`${order.customer}-${order.id}-${order.phone}`}
                  className="flex items-center cursor-pointer"
                  onClick={() => {
                    setSelectedOrderId(order.id)
                    setIsOpenOrderDetails(true)
                  }}
                >
                  <TableCell className="font-medium flex-1 ">
                    {order.customer}
                  </TableCell>

                  <TableCell className="flex-1 hidden lg:block">
                    {order.tattooType}
                  </TableCell>

                  <TableCell className="flex-1">
                    <Badge variant={"secondary"}>
                      {schedule}
                    </Badge>
                  </TableCell>

                  <TableCell className="flex-1 hidden lg:flex lg: items-center lg:gap-2">

                    {order.phone}
                    <Button variant={"ghost"} size={"icon"} onClick={() => (openChat({ phone: order.phone }))}>
                      <WhatsAppIcon />
                    </Button>
                  </TableCell>

                  <TableCell className="flex-1 hidden lg:block">
                    <Status value={order.status} />
                  </TableCell>

                  <TableCell className="flex-1 ">

                    <div className="flex  gap-2 flex-col">
                      <span title="Total" className="flex gap-2">
                        <Banknote size={19} />
                        {formatCurrency(order.price)}
                      </span>
                      <span title="Paid" className="flex gap-2">
                        <HandCoins size={18} />
                        {formatCurrency(order.paid)}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })
          }

        </TableBody >
        {
          selectedOrderId && (
            <OrderDetailsDialog
              orderId={selectedOrderId}
              isOpen={isOpenOrderDetails}
              setIsOpen={setIsOpenOrderDetails}
            />
          )
        }
      </Table >
    </>
  )
}