import { forwardRef } from "react";
import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const base =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 text-[15px] text-navy-900 placeholder:text-slate-400 " +
  "transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 disabled:opacity-60";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(base, "h-11", className)} {...props} />
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(base, "min-h-[132px] py-3", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => (
  <select ref={ref} className={cn(base, "h-11 pr-8", className)} {...props} />
));
Select.displayName = "Select";

export function Label({
  className,
  required,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-navy-800", className)}
      {...props}
    >
      {children}
      {required && <span className="ml-0.5 text-brand">*</span>}
    </label>
  );
}

export function RadioCard({
  checked,
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { checked: boolean; label: string }) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2.5 rounded-lg border-2 px-3.5 py-2.5 text-sm font-medium transition-colors",
        checked
          ? "border-brand bg-brand-50 text-navy-900"
          : "border-slate-200 text-slate-600 hover:border-slate-300"
      )}
    >
      <input type="radio" className="h-4 w-4 accent-[#F26522]" checked={checked} {...props} />
      {label}
    </label>
  );
}
