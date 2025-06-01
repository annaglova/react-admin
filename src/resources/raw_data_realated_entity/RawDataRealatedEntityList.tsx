import { Datagrid, DateField, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const RawDataRealatedEntityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RawDataRealatedEntityList = () => (
  <List filters={RawDataRealatedEntityFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="priority" />
    </Datagrid>
  </List>
);
