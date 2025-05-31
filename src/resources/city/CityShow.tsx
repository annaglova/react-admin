// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const CityShow = ({ record }: any) => (
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
        <Labeled label="Region Id" value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Time Zone Id" value={<ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Geo Names Time Zone Id" value={<ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Alternate Names" value={<TextField source="alternate_names" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Geo Names Id" value={<TextField source="geo_names_id" />} />
        <Labeled label="Dem" value={<NumberField source="dem" />} />
        <Labeled label="Latitude" value={<NumberField source="latitude" />} />
        <Labeled label="Longitude" value={<NumberField source="longitude" />} />
        <Labeled label="Population" value={<NumberField source="population" />} />
      </>
    }
  />
);
