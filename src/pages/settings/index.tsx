import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypographyH2 } from "@/utils/typography/typography";

import { Customers } from "./customers";
import { Tags } from "./tags";
import { TattooType } from "./tattoo-type";

export function Settings() {
  return (
    <>
      <TypographyH2 text="Settings" />
      <Tabs defaultValue="customers" className="mt-4">

        <TabsList className="w-full">
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="tags">Tags</TabsTrigger>
          <TabsTrigger value="tattoo-type">Tattoo Type</TabsTrigger>
        </TabsList>

        <TabsContent value="customers">
          <Customers />
        </TabsContent>

        <TabsContent value="tags">
          <Tags />
        </TabsContent>

        <TabsContent value="tattoo-type">
          <TattooType />
        </TabsContent>
      </Tabs>
    </>
  )
}