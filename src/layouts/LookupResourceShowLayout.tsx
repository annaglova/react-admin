// src/layouts/LookupResourceShowLayout.tsx
import { ReactNode } from "react";
import { Show, SimpleShowLayout } from "react-admin";

interface LookupResourceShowLayoutProps {
  name: ReactNode;
  id: ReactNode;
  fieldsLeft: ReactNode;
  fieldsRight: ReactNode;
  value?: ReactNode;
}

export const LookupResourceShowLayout = ({
  name,
  id,
  fieldsLeft,
  fieldsRight,
  value,
}: LookupResourceShowLayoutProps) => (
  <Show>
    <SimpleShowLayout>
      <div className="flex justify-between items-end mb-4 px-6 pt-4">
        <span className="">{name}</span>
        <span className="">{id}</span>
      </div>
      <div className="grid grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-sm">
        <div className="space-y-4">{fieldsLeft}</div>
        <div className="space-y-4">{fieldsRight}</div>
      </div>
    </SimpleShowLayout>
  </Show>
);
