import { TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const EntityByRawDataEdit = () => (
  <ResourceEditLayout
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
