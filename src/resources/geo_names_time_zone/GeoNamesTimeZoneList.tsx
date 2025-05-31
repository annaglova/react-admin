import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const GeoNamesTimeZoneShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="gmt_offset" />
      <TextField source="country_code" />
    </SimpleShowLayout>
  </Show>
);
