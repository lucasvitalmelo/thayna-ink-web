import { AddCustomerForm } from "./add-customer-form";
import { CustomerCard } from "./customer-card";
import { TypographyH2 } from "@/utils/typography/typography";
import { useGetAllCustomers } from "@/hooks/use-get-all-customers";

export function Customers() {

  const { data: customers } = useGetAllCustomers()
  return (
    <>
      <div className="flex items-center justify-between w-full my-2">
        <TypographyH2 border={false} text="Manage customers" />
        <AddCustomerForm />
      </div>

      <div className="flex flex-wrap items-center gap-10 mt-4">
        {
          customers?.map(customer => (
            <CustomerCard key={customer.id} {...customer} />
          ))
        }
      </div>
    </>
  )
}