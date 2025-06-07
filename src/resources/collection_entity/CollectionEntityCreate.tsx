import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CollectionEntityCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="record_id" validate={[]} />
          <ReferenceInput source="collection_id" reference="collection">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="contact_id" reference="contact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="pet_id" validate={[]} />
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
