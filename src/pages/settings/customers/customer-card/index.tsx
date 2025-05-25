import type { Customer } from "@/types/customer"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import { TypographyMuted } from "@/utils/typography/typography"

import { DeleteCustomerDialog } from "./delete-customer-dialog"

export function CustomerCard({ id, name, email, age, phone }: Customer) {
  return (
    <Card className="w-[400px] flex gap-3 py-5">
      <CardHeader>
        <CardTitle className="flex items-center justify-between border-b pb-2">
          <div>
            {name}
            <TypographyMuted text={new Date(age).toISOString()} />
          </div>
          <div className="flex gap-1">
            <DeleteCustomerDialog id={id} name={name} />

            <Button
              disabled
              size={"icon"}
              variant={"ghost"}>
              <Edit />
            </Button>
          </div>

        </CardTitle>
      </CardHeader>
      <CardContent className="mt-0">
        <div className="flex gap-2">
          <strong>Phone:</strong>
          <p>{phone}</p>
        </div>
        <div className="flex gap-2">
          <strong>Email: </strong>
          <p> {email}</p>
        </div>
      </CardContent>
    </Card>

  )
}
