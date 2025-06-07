import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ContactInTagCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="tag_id" reference="contact_tag">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="entity_id" validate={[]} />
      </>
    }
  />
);
