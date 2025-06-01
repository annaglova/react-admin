// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const RegionShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Country Id" value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Time Zone Id" value={<ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Geo Names Time Zone Id" value={<ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Alternate Names" value={<TextField source="alternate_names" />} />
        <Labeled label="Geo Names Id" value={<TextField source="geo_names_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Dem" value={<NumberField source="dem" />} />
        <Labeled label="Latitude" value={<NumberField source="latitude" />} />
        <Labeled label="Longitude" value={<NumberField source="longitude" />} />
        <Labeled label="Code" value={<TextField source="code" />} />
        <Labeled label="Region Admin1 Code" value={<TextField source="region_admin1_code" />} />
      </>
    }
  />
);
