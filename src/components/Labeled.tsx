// src/components/Labeled.tsx
import { ReactNode } from "react";

export function Labeled({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center mb-2 min-h-7">
      <div className="w-48 text-sm text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
