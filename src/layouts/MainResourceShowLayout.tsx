import { ReactNode } from "react";
import { Show, SimpleShowLayout, Tab, TabbedShowLayout } from "react-admin";

interface MainResourceShowLayoutProps {
  name: ReactNode;
  id: ReactNode;
  fieldsLeft: ReactNode;
  fieldsRight: ReactNode;
  detailsConfigs?: { label: string; content: ReactNode }[];
}

export const MainResourceShowLayout = ({
  name,
  id,
  fieldsLeft,
  fieldsRight,
  detailsConfigs = [],
}: MainResourceShowLayoutProps) => (
  <Show>
    <div className="p-3 bg-gray-100">
      {/* Верхній блок */}
      <SimpleShowLayout className="bg-white rounded-md mb-2">
        <div className="flex justify-between items-end pt-2 pb-1 px-6 ">
          <span className="text-xl font-semibold">{name}</span>
          <span className="text-sm text-gray-500">{id}</span>
        </div>
      </SimpleShowLayout>
      {/* Tabs */}
      <TabbedShowLayout className="bg-white rounded-md">
        <Tab label="General">
          <div className="grid grid-cols-2 gap-8 px-6 pt-5 pb-6">
            <div className="space-y-3">{fieldsLeft}</div>
            <div className="space-y-3">{fieldsRight}</div>
          </div>
        </Tab>
        {detailsConfigs.map((tab, i) => (
          <Tab key={i} label={tab.label}>
            {tab.content}
          </Tab>
        ))}
      </TabbedShowLayout>
    </div>
  </Show>
);
