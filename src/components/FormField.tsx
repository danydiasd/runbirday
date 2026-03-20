import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

type BaseFieldProps = {
  label: string;
  hint?: string;
  children: ReactNode;
};

export function FieldWrapper({ label, hint, children }: BaseFieldProps) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-brand-800">{label}</span>
      {children}
      {hint ? <span className="block text-xs text-brand-500">{hint}</span> : null}
    </label>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
    />
  );
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
    />
  );
}

export function TextAreaInput(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="min-h-28 w-full rounded-2xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
    />
  );
}
