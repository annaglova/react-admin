import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const GeoNamesTimeZoneCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="gmt_offset" />
      <TextInput source="country_code" />
    </SimpleForm>
  </Create>
);
