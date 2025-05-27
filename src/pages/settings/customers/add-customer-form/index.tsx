import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Plus } from "lucide-react";
import { useAddCustomer } from "@/hooks/use-add-customer";
import { useState } from "react";

const addCustomerSchema = z.object({
  name: z.string(),
  age: z.string(),
  email: z.string().email(),
  phone: z.string()

});

type AddCustomerSchema = z.infer<typeof addCustomerSchema>;

export function AddCustomerForm() {
  const [isOpen, setIsOpen] = useState(false)

  const { handleSubmit, register, reset } = useForm<AddCustomerSchema>({
    resolver: zodResolver(addCustomerSchema),
  });


  const { mutate, isPending } = useAddCustomer({
    onSettled: () => {
      reset()
      setIsOpen(false)
    }
  })


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild> */}
      <Button
        size={"sm"}
        onClick={() => setIsOpen(true)}
      >
        <Plus />
        Add customer
      </Button>
      {/* </DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Customer form</DialogTitle>
          <DialogDescription>Fill in the fields below to add a new customer.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(data => mutate({ ...data, age: new Date(data.age) }))} className="flex flex-col gap-2">

          <div className="flex gap-2">

            <Input
              {...register("name")}
              placeholder="Name"
            />
            <Input
              type="date"
              {...register("age")}
              placeholder="Date of birth"
            />
          </div>

          <Input
            {...register("phone")}
            placeholder="Phone"
          />
          <Input
            {...register("email")}
            placeholder="Email"
          />

          <Button disabled={isPending} className="mt-2" type="submit">

            {isPending ? <LoaderCircle className="animate-spin" /> : 'Add customer'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}