import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH2 } from "@/utils/typography/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TagTable } from "./tag-table";
import { useAddTag } from "@/hooks/use-add-tag";

const addTagSchema = z.object({
  name: z.string(),
});

type AddTagSchema = z.infer<typeof addTagSchema>;

export function Tags() {
  const { handleSubmit, register, reset } = useForm<AddTagSchema>({
    resolver: zodResolver(addTagSchema),
  });

  const { mutate } = useAddTag({ onSettled: () => reset() })


  return (
    <>
      <div className="flex items-center justify-between w-full my-2">
        <TypographyH2 border={false} text="Manage tags" />
        <form
          className="flex gap-2"
          onSubmit={handleSubmit(
            data => mutate({ ...data, })
          )}
        >
          <Input
            {...register("name")}
            placeholder="Name"
          />

          <Button type="submit">
            <CirclePlus />
            Add tag
          </Button>
        </form>
      </div>

      <div className="ml-auto">
        <TagTable />
      </div>
    </>
  )
}