import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH2 } from "@/utils/typography/typography";
import { TattooTypeTable } from "./tattoo-type-table";

import { CirclePlus } from "lucide-react";
import { useAddTattooType } from "@/hooks/use-add-tattoo-type";

const addTattooTypeSchema = z.object({
  name: z.string(),
});

type AddTattooTypeSchema = z.infer<typeof addTattooTypeSchema>;

export function TattooType() {

  const { handleSubmit, register, reset } = useForm<AddTattooTypeSchema>({
    resolver: zodResolver(addTattooTypeSchema),
  });

  const { mutate } = useAddTattooType({ onSettled: () => reset() })
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
            Add tattoo
          </Button>
        </form>
      </div>

      <div className="ml-auto">
        <TattooTypeTable />
      </div>
    </>
  )
}