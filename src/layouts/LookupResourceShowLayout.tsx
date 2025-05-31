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
    <SimpleShowLayout className="p-3 bg-gray-100">
      <div className="bg-white rounded-md mb-2">
        <div className="flex justify-between items-end mb-4 px-6 pt-4">
          <span className="">{name}</span>
          <span className="">{id}</span>
        </div>
      </div>
      <div className="bg-white rounded-md">
        <div className="grid grid-cols-2 gap-8 px-6 pt-5 pb-6">
          <div className="space-y-3">{fieldsLeft}</div>
          <div className="space-y-3">{fieldsRight}</div>
        </div>
      </div>
    </SimpleShowLayout>
  </Show>
);
