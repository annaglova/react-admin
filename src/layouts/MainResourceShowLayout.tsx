// src/layouts/MainResourceShowLayout.tsx
import { ReactNode } from "react";
import { Show, SimpleShowLayout, Tab, TabbedShowLayout } from "react-admin";

interface MainResourceShowLayoutProps {
  name: ReactNode;
  id: ReactNode;
  fieldsLeft: ReactNode;
  fieldsRight: ReactNode;
  value?: ReactNode;
}

export const MainResourceShowLayout = ({
  name,
  id,
  fieldsLeft,
  fieldsRight,
  value,
}: MainResourceShowLayoutProps) => (
  <Show>
    <SimpleShowLayout>
      <div className="flex justify-between items-end mb-4 px-6 pt-4">
        <span className="">{name}</span>
        <span className="">{id}</span>
      </div>
    </SimpleShowLayout>
    <TabbedShowLayout>
      <Tab label="General">
        <div className="grid grid-cols-2 gap-8 px-6 pt-5 pb-6">
          <div className="space-y-3">{fieldsLeft}</div>
          <div className="space-y-3">{fieldsRight}</div>
        </div>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
