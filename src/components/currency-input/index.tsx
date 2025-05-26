// components/CurrencyInput.tsx

import { NumericFormat, type NumericFormatProps } from "react-number-format";
import { Input } from "@/components/ui/input";

type CurrencyInputProps = Omit<NumericFormatProps, 'onValueChange' | 'customInput'> & {
  value: number;
  onChange: (value: number) => void;
  isError?: boolean;
};

export function CurrencyInput({ value, onChange, isError, ...props }: CurrencyInputProps) {
  return (
    <NumericFormat
      value={value}
      onValueChange={(values) => {
        onChange(values.floatValue ?? 0);
      }}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      customInput={Input}
      isError={isError}
      {...props}
    />
  );
}
