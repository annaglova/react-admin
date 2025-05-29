import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const CountryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CountryList = () => (
  <List filters={CountryFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="image" />
      <TextField source="billing_info" />
      <TextField source="time_zone_id" />
      <TextField source="code" />
      <TextField source="alternate_names" />
      <TextField source="geo_names_time_zone_id" />
      <TextField source="geo_names_country_code" />
      <TextField source="geo_names_id" />
      <NumberField source="dem" />
      <NumberField source="latitude" />
      <NumberField source="longitude" />
      <TextField source="alpha2_code" />
      <TextField source="public_data_id" />
      <TextField source="url" />
    </Datagrid>
  </List>
);
