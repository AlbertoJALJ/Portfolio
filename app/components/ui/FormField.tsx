import type { ComponentProps } from "react";
import Input from "@/components/ui/Input";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  inputProps?: ComponentProps<"input">;
};

export default function FormField({
  id,
  label,
  required = false,
  error,
  helperText,
  inputProps,
}: FormFieldProps) {
  const describedBy = error ? `${id}-error` : helperText ? `${id}-helper` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-left text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-brand-blue">*</span>}
      </label>

      <Input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={error ? "border-red-400 focus:border-red-500 focus:ring-red-200" : undefined}
        {...inputProps}
      />

      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-helper`} className="text-sm text-blue-gray/80">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
