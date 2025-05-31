import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CityShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="country_id" reference="country">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="region_id" reference="region">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="time_zone_id" reference="time_zone">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="alternate_names" />
      <TextField source="geo_names_id" />
      <NumberField source="dem" />
      <NumberField source="latitude" />
      <NumberField source="longitude" />
      <NumberField source="population" />
    </SimpleShowLayout>
  </Show>
);
