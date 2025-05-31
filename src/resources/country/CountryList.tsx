import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CountryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="image" />
      <TextField source="billing_info" />
      <ReferenceField source="time_zone_id" reference="time_zone">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="code" />
      <TextField source="alternate_names" />
      <ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="geo_names_country_code" />
      <TextField source="geo_names_id" />
      <NumberField source="dem" />
      <NumberField source="latitude" />
      <NumberField source="longitude" />
      <TextField source="alpha2_code" />
      <ReferenceField source="public_data_id" reference="public_data">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="url" />
    </SimpleShowLayout>
  </Show>
);
