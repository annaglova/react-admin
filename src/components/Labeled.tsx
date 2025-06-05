import { ReactNode } from "react";

export function Labeled({
  label,
  value,
  required,
}: {
  label: string;
  value: ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex items-center mb-2 min-h-7">
      <div className="w-48 text-sm text-gray-500">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
