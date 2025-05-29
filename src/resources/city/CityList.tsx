import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const CityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CityList = () => (
  <List filters={CityFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="country_id" />
      <TextField source="region_id" />
      <TextField source="time_zone_id" />
      <TextField source="geo_names_time_zone_id" />
      <TextField source="alternate_names" />
      <TextField source="geo_names_id" />
      <NumberField source="dem" />
      <NumberField source="latitude" />
      <NumberField source="longitude" />
      <NumberField source="population" />
    </Datagrid>
  </List>
);
