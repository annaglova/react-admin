import { ReactNode } from "react";
import { Show, Tab, TabbedShowLayout } from "react-admin";

interface MainResourceShowLayoutProps {
  name: string;
  id: string | number;
  fieldsLeft: ReactNode;
  fieldsRight: ReactNode;
  children?: ReactNode;
}

export const MainResourceShowLayout = ({
  name,
  id,
  fieldsLeft,
  fieldsRight,
  children,
}: MainResourceShowLayoutProps) => (
  <Show>
    <TabbedShowLayout>
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <span className="text-xs text-gray-400">ID: {id}</span>
      </div>
      <Tab label="General">
        {/* Two Columns */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">{fieldsLeft}</div>
          <div className="space-y-3">{fieldsRight}</div>
        </div>
        {children}
      </Tab>
      {/* Tabs for future */}
    </TabbedShowLayout>
  </Show>
);
