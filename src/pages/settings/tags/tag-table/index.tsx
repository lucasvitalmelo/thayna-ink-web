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
import { Tag, Trash } from "lucide-react"

import { useGetAllTags } from "@/hooks/use-get-all-tags";
import { useDeleteTag } from "@/hooks/use-delete-tag";

export function TagTable() {
  const { data: tags } = useGetAllTags()
  const { mutate } = useDeleteTag()

  return (
    <Table className="lg:w-[500px] mx-auto mt-4">
      <TableCaption>A list of your available tags.</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead>Name</TableHead>
          <TableHead className="w-20">Actions</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {
          tags?.map(tag => (
            <TableRow key={tag.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Tag size={16} />
                  {tag.name}
                </div>
              </TableCell>
              <TableCell className="flex justify-center">
                <Button
                  className="mr-3.5"
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => mutate({ id: tag.id })}
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