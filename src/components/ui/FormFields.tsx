import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { TickIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/*
 * Form controls from the enquiry form (31:4357) and the centre search (31:3719).
 * Figma shows the label as the field's placeholder, so each control keeps a visually hidden
 * <label> for assistive tech. Text starts 24 px in (frame padding 16 + text padding 8).
 */

// Enquiry form: white 12 % on the dark panel, radius 8, Inter Regular 16, white placeholder.
const darkFieldClasses =
  "w-full rounded-button bg-white/12 px-6 text-body text-white placeholder:text-white transition-colors hover:bg-white/16 focus-visible:bg-white/16";

type FieldBaseProps = {
  label: string;
  name: string;
  className?: string;
};

type TextFieldProps = FieldBaseProps & Omit<ComponentPropsWithoutRef<"input">, "name" | "className" | "placeholder" | "id">;

export function TextField({ label, name, className, type = "text", ...rest }: TextFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input id={name} name={name} type={type} placeholder={label} className={cn(darkFieldClasses, "h-14")} {...rest} />
    </div>
  );
}

type TextAreaProps = FieldBaseProps & Omit<ComponentPropsWithoutRef<"textarea">, "name" | "className" | "placeholder" | "id">;

/** 142 px message box (31:4375): padding 16 plus 4/8 around the text. */
export function TextArea({ label, name, className, rows = 4, ...rest }: TextAreaProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={label}
        className={cn(darkFieldClasses, "block min-h-35.5 resize-y py-5")}
        {...rest}
      />
    </div>
  );
}

type CheckboxProps = {
  name: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "name" | "className" | "type" | "id" | "children">;

/** 24 px box with a 1 px brand border, radius 4 (Figma "arrow 19"); the hidden white tick is the checked state. */
export function Checkbox({ name, children, className, ...rest }: CheckboxProps) {
  return (
    <div className={cn("flex items-start", className)}>
      <span className="relative flex size-10 shrink-0 items-center justify-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          className="peer absolute inset-0 cursor-pointer appearance-none rounded-check focus-visible:outline-none"
          {...rest}
        />
        <span className="pointer-events-none size-6 rounded-check border border-brand transition-colors peer-hover:border-accent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand" />
        <TickIcon className="pointer-events-none absolute text-white opacity-0 transition-opacity peer-checked:opacity-100" />
      </span>
      <label htmlFor={name} className="cursor-pointer p-2 font-alt text-eyebrow font-medium text-snow">
        {children}
      </label>
    </div>
  );
}

type SearchFieldProps = FieldBaseProps & Omit<ComponentPropsWithoutRef<"input">, "name" | "className" | "placeholder" | "id">;

/** Centre search input (31:3719): light grey field, radius 8, Inter Medium 16, grey placeholder. */
export function SearchField({ label, name, className, ...rest }: SearchFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="search"
        placeholder={label}
        className="h-14 w-full rounded-button bg-field px-6 text-body font-medium text-ink transition-colors placeholder:text-placeholder hover:bg-tile-line"
        {...rest}
      />
    </div>
  );
}
