import { TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const EntityByRawDataCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="entity_name"  />
          <TextInput source="record_id"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="buckup_rawdata_id"  />
          <TextInput source="raw_data_id"  />
      </>
    }
  />
);
