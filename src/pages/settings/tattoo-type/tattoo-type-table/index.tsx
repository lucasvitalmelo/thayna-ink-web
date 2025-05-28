import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Palette, Trash } from "lucide-react"
import { useGetAllTattooTypes } from "@/hooks/use-get-all-tattoo-types"
import { useDeleteTattooType } from "@/hooks/use-delete-tattoo-type"


export function TattooTypeTable() {
  const { data: tattoos } = useGetAllTattooTypes()
  const { mutate } = useDeleteTattooType()

  return (
    <Table className="lg:w-[500px] mx-auto mt-4">
      <TableCaption>A list of your available tattoo types.</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead>Name</TableHead>
          <TableHead className="w-20">Actions</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {
          tattoos?.map(tattoo => (
            <TableRow key={tattoo.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Palette size={16} />
                  {tattoo.name}
                </div>
              </TableCell>
              <TableCell className="flex justify-center">
                <Button
                  className="mr-3.5"
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => mutate({ id: tattoo.id })}
                >
                  <Trash
                    className="text-red-400"
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))
        }

      </TableBody>
    </Table>

  )
}