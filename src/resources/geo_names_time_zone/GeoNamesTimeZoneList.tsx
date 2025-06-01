import { Datagrid, DateField, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const GeoNamesTimeZoneFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const GeoNamesTimeZoneList = () => (
  <List filters={GeoNamesTimeZoneFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="gmt_offset" />
      <TextField source="country_code" />
    </Datagrid>
  </List>
);
