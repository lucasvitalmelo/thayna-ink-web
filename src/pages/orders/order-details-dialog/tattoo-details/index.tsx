import { TypographyMuted } from "@/utils/typography/typography"
import { BicepsFlexed, Ruler } from "lucide-react"

type TattooDetailsProps = {
  location: string
  width: number
  height: number
}

export function TattooDetails({ location, width, height }: TattooDetailsProps) {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <TypographyMuted text="Tattoo details" />
      <span className="flex gap-2 items-center">
        <BicepsFlexed size={18} />
        {location}
      </span>
      <span className="flex gap-2 items-center">
        <Ruler size={18} />
        {`${width}cm x ${height}cm`}
      </span>
    </div>
  )
}
