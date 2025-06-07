// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const EntityByRawDataShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Entity Name" required={false} value={<TextField source="entity_name" />} />
        <Labeled label="Record Id" required={false} value={<TextField source="record_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Buckup Rawdata Id" required={false} value={<TextField source="buckup_rawdata_id" />} />
        <Labeled label="Raw Data Id" required={false} value={<TextField source="raw_data_id" />} />
      </>
    }
  />
);
