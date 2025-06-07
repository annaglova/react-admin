import { TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const EntityByRawDataCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="entity_name" validate={[]} />
          <TextInput source="record_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="buckup_rawdata_id" validate={[]} />
          <TextInput source="raw_data_id" validate={[]} />
      </>
    }
  />
);
