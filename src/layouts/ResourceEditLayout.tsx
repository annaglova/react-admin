import { ReactNode } from "react";
import { Edit, SimpleForm } from "react-admin";

interface ResourceEditLayoutProps {
  name: ReactNode;
  fieldsLeft: ReactNode;
  fieldsRight: ReactNode;
}

export const ResourceEditLayout = ({
  name,
  fieldsLeft,
  fieldsRight,
}: ResourceEditLayoutProps) => (
  <Edit>
    <SimpleForm>
      <div className="px-6 pt-5 pb-6 w-full">
        <div>{name}</div>
        <div className="grid grid-cols-2 gap-8 ">
          <div className="space-y-3">{fieldsLeft}</div>
          <div className="space-y-3">{fieldsRight}</div>
        </div>
      </div>
    </SimpleForm>
  </Edit>
);
