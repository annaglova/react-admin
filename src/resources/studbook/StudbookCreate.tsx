import { ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const StudbookCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="status_id" reference="studbook_status">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="type_id" reference="studbook_type">
  <SelectInput optionText="name" />
</ReferenceInput>
          <TextInput source="alternate_names" />
      </>
    }
  />
);
