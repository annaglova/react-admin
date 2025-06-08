import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const RawDataEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes"  />
          <TextInput source="json"  />
          <ReferenceInput source="status_id" reference="raw_data_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="log"  />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="redirect_url"  />
          <TextInput source="record_id"  />
          <TextInput source="entity_name"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="model"  />
          <TextInput source="hash_md5"  />
          <TextInput source="contact_id"  />
          <TextInput source="account_id"  />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_id"  />
      </>
    }
  />
);
