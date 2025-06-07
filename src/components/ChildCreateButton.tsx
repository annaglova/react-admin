import { CreateButton, useRecordContext } from "react-admin";

type ChildCreateButtonProps = {
  resource: string;
  fkField: string;
};

export const ChildCreateButton = ({
  resource,
  fkField,
}: ChildCreateButtonProps) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <CreateButton
      resource={resource}
      to={{
        pathname: `/${resource}/create`,
        state: { record: { [fkField]: record.id } },
      }}
    />
  );
};
