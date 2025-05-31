import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const GeoNamesTimeZoneEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="gmt_offset" />
      <TextInput source="country_code" />
    </SimpleForm>
  </Edit>
);
