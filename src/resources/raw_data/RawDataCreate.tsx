import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const RawDataCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <TextInput source="json" validate={[]} />
          <ReferenceInput source="status_id" reference="raw_data_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="log" validate={[]} />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="redirect_url" validate={[]} />
          <TextInput source="record_id" validate={[]} />
          <TextInput source="entity_name" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="model" validate={[]} />
          <TextInput source="hash_md5" validate={[]} />
          <TextInput source="contact_id" validate={[]} />
          <TextInput source="account_id" validate={[]} />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="pet_id" validate={[]} />
      </>
    }
  />
);
