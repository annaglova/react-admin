// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";



export const CityShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" required={false} value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Time Zone Id" required={false} value={<ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Geo Names Time Zone Id" required={false} value={<ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Alternate Names" required={false} value={<TextField source="alternate_names" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Geo Names Id" required={false} value={<TextField source="geo_names_id" />} />
        <Labeled label="Dem" required={false} value={<NumberField source="dem" />} />
        <Labeled label="Latitude" required={false} value={<NumberField source="latitude" />} />
        <Labeled label="Longitude" required={false} value={<NumberField source="longitude" />} />
        <Labeled label="Population" required={false} value={<NumberField source="population" />} />
      </>
    }
  />
);
