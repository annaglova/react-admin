import { ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const StudbookEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <ReferenceInput source="account_id" reference="account">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="status_id" reference="studbook_status">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="type_id" reference="studbook_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="alternate_names"  />
      </>
    }
  />
);
