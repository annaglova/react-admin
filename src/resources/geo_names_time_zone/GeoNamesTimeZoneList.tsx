import { Datagrid, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const GeoNamesTimeZoneFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const GeoNamesTimeZoneList = () => (
  <List filters={GeoNamesTimeZoneFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <NumberField source="gmt_offset" label="Gmt Offset" />
      <TextField source="country_code" label="Country Code" />
    </Datagrid>
  </List>
);
