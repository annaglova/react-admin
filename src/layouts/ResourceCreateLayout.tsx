import { ReactNode } from "react";
import { Create, SimpleForm } from "react-admin";

interface ResourceCreateLayoutProps {
  name: ReactNode;
  fieldsLeft: ReactNode;
  fieldsRight: ReactNode;
}

export const ResourceCreateLayout = ({
  name,
  fieldsLeft,
  fieldsRight,
}: ResourceCreateLayoutProps) => (
  <Create>
    <SimpleForm>
      <div className="px-6 pt-5 pb-6">
        <div>{name}</div>
        <div className="grid grid-cols-2 gap-8 ">
          <div className="space-y-3">{fieldsLeft}</div>
          <div className="space-y-3">{fieldsRight}</div>
        </div>
      </div>
    </SimpleForm>
  </Create>
);
