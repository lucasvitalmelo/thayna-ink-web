import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useDeleteCustomer } from "@/hooks/use-delete-customer";
import { LoaderCircle, Trash } from "lucide-react";

export function DeleteCustomerDialog({ id, name }: { name: string, id: number }) {
  const { mutate, isPending } = useDeleteCustomer()


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Trash className="text-red-400" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete {name}</DialogTitle>
          <DialogDescription>Are you sure you want to delete the client <strong>{name}</strong>?</DialogDescription>
        </DialogHeader>

        <Button
          className="hover:opacity-90 transition-all "
          variant={"destructive"}
          onClick={() => mutate({ id })}>
          {isPending ? <LoaderCircle className="animate-spin" /> : "Delete"}
        </Button>
      </DialogContent>
    </Dialog>
  )
}