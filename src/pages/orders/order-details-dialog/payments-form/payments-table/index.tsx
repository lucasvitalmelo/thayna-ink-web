import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useDeletePayment } from "@/hooks/use-delete-payment";
import type { Payment } from "@/types/payment";
import { formatCurrency } from "@/utils/format-currency";
import { Trash } from "lucide-react";

export function PaymentsTable({ payments, orderId }: { payments: Payment[], orderId: number }) {
  const { mutate } = useDeletePayment({ orderId })

  return (
    <Table className="mt-2">
      <TableCaption>
        A list of your recent orders.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead className="w-30" >Amount</TableHead>
          <TableHead className="w-10">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map(payment => (
          <TableRow key={payment.id}>
            <TableCell >
              <p className="w-[250px] truncate">{payment.description}</p>
            </TableCell>
            <TableCell className="w-30" >
              {formatCurrency(payment.amount)}
            </TableCell>
            <TableCell className="w-10">
              <Button
                onClick={() => mutate({ paymentId: payment.id })}
                size={"icon"}
                variant={"ghost"}
              >
                <Trash className="text-red-400" />
              </Button>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}