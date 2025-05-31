// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const CountryShow = ({ record }: any) => (
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
        <Labeled label="Image" value={<TextField source="image" />} />
        <Labeled label="Billing Info" value={<TextField source="billing_info" />} />
        <Labeled label="Time Zone Id" value={<ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Code" value={<TextField source="code" />} />
        <Labeled label="Alternate Names" value={<TextField source="alternate_names" />} />
        <Labeled label="Geo Names Time Zone Id" value={<ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Geo Names Country Code" value={<TextField source="geo_names_country_code" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Geo Names Id" value={<TextField source="geo_names_id" />} />
        <Labeled label="Dem" value={<NumberField source="dem" />} />
        <Labeled label="Latitude" value={<NumberField source="latitude" />} />
        <Labeled label="Longitude" value={<NumberField source="longitude" />} />
        <Labeled label="Alpha2 Code" value={<TextField source="alpha2_code" />} />
        <Labeled label="Public Data Id" value={<ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Url" value={<TextField source="url" />} />
      </>
    }
  />
);
