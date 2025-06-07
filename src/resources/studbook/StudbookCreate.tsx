import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const StudbookCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="status_id" reference="studbook_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="type_id" reference="studbook_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="alternate_names" validate={[]} />
      </>
    }
  />
);
