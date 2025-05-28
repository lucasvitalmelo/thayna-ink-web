import { Button } from "@/components/ui/button"
import { TypographyMuted } from "@/utils/typography/typography"
import { Mail, Phone } from "lucide-react"

type CustomerInfoProps = {
  customer: {
    name: string
    email: string
    phone: string
  }
}

export function CustomerInfo({ customer }: CustomerInfoProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <TypographyMuted text="Customer information" />
      <span className="flex gap-2 items-center">
        Name: {customer.name}
      </span>

      <span className="flex gap-2 items-center">
        <Phone size={18} />
        {customer.phone}
        <Button variant="secondary" className="ml-2" size="xs">WhatsApp</Button>
      </span>
      <span className="flex gap-2 items-center">
        <Mail size={18} />
        {customer.email}
      </span>
    </div>
  )
}
