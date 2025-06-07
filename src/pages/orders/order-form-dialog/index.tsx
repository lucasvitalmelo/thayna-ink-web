import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus } from "lucide-react";
import { CurrencyInput } from "@/components/currency-input";
import { useGetAllTattooTypes } from "@/hooks/use-get-all-tattoo-types";
import { useGetAllCustomers } from "@/hooks/use-get-all-customers";
import { useAddOrder } from "@/hooks/use-add-order";
import { useState } from "react";

const tattooSchema = z.object({
  customerId: z.number().int().positive(),
  tattooType: z.string().nonempty(),
  bodyLocation: z.string().nonempty(),
  width: z.number().positive().min(1),
  height: z.number().positive().min(1),
  price: z.number().positive().min(0),
  status: z.enum(["PROGRESS", "CONCLUDED", "PENDING"]),
  tags: z.array(z.string()).optional()
});

type TattooFormData = z.infer<typeof tattooSchema>;

export function OrderFormDialog() {
  const [isOpen, setIsOpen] = useState(false)

  const { data: tattooTypes } = useGetAllTattooTypes()
  const { data: customers } = useGetAllCustomers()

  const { handleSubmit, control, register, reset, formState: { errors } } = useForm<TattooFormData>({
    resolver: zodResolver(tattooSchema),
  });

  const { mutate } = useAddOrder({
    onSettled: () => {
      reset()
      setIsOpen(false)
    }
  })

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size={"sm"}
          className="flex ml-auto mb-2"
        >
          <CirclePlus />
          New Order
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle>Order form</DialogTitle>
          <DialogDescription>Fill in the fields below to create a new order.</DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(data => mutate(data))}
          className="flex flex-col gap-3"
        >
          <div className="flex gap-3">
            <Controller
              name={'customerId'}
              control={control}
              render={
                ({ field }) => (
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                  >
                    <SelectTrigger
                      className="flex-1"
                      isError={!!errors.customerId}
                    >
                      <SelectValue
                        placeholder="Customer"
                      />
                    </SelectTrigger>
                    <SelectContent>

                      {customers?.map(customer => (
                        <SelectItem
                          key={customer.id}
                          value={`${customer.id}`}
                        >
                          {customer.name}
                        </SelectItem>
                      ))}

                    </SelectContent>
                  </Select>
                )
              }
            />

            <Controller
              name={'tattooType'}
              control={control}
              defaultValue=""
              render={
                ({ field }) => (
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger
                      className="w-[180px]"
                      isError={!!errors.tattooType}

                    >
                      <SelectValue
                        placeholder="Tattoo type"
                      />
                    </SelectTrigger>
                    <SelectContent>

                      {tattooTypes?.map(tattootype => (
                        <SelectItem
                          key={tattootype.id}
                          value={`${tattootype.name}`}
                        >
                          {tattootype.name}
                        </SelectItem>
                      ))}

                    </SelectContent>
                  </Select>
                )
              }
            />
          </div>

          <Input
            isError={!!errors.bodyLocation}
            {...register("bodyLocation")}
            placeholder="Body location"
          />

          <div className="flex gap-3">
            <Input
              isError={!!errors.width}
              type="number"
              {...register("width", { valueAsNumber: true })}
              placeholder="width"
            />
            <Input
              type="number"
              isError={!!errors.height}
              {...register("height", { valueAsNumber: true })}
              placeholder="height"
            />
          </div>

          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                value={field.value}
                onChange={field.onChange}
                placeholder="Price"
                isError={!!errors.price}
              />
            )}
          />

          <Controller
            name={'status'}
            control={control}
            render={
              ({ field }) => (
                <Select
                  onValueChange={(value) => field.onChange(value)}

                >
                  <SelectTrigger
                    className="w-full"
                    isError={!!errors.status}

                  >
                    <SelectValue
                      placeholder="Status"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="PROGRESS">Progress</SelectItem>
                    <SelectItem value="CONCLUDED">Concluded</SelectItem>
                  </SelectContent>
                </Select>
              )
            }
          />

          <Button
            type="submit"
            className="mt-4"
          >
            Save
          </Button>
        </form>

      </DialogContent>

    </Dialog >
  )
}