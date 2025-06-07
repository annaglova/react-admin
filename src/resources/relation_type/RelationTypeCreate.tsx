import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const RelationTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <BooleanInput source="for_contact_contact" validate={[]} />
          <BooleanInput source="for_account_contact" validate={[]} />
          <BooleanInput source="for_contact_account" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="for_account_account" validate={[]} />
          <ReferenceInput source="reverse_relation_type_id" reference="relation_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="include_into_container" validate={[]} />
      </>
    }
  />
);
