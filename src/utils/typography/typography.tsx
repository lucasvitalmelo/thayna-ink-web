import { twMerge } from "tailwind-merge"

export function TypographyH1({ text }: { text: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  )
}

export function TypographyH2({ text, border = true }: { text: string, border?: boolean }) {
  return (
    <h2 className={twMerge(border && "border-b pb-2", "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0")}>
      {text}
    </h2>
  )
}

export function TypographyH3({ text }: { text: string }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  )
}

export function TypographyMuted({ text }: { text: string }) {
  return (
    <p className="text-sm text-muted-foreground">
      {text}
    </p>
  )
}

export function TypographyP({ text }: { text: string }) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {text}
    </p>
  )
}





