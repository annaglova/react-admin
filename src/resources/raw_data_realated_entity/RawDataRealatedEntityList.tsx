import { Datagrid, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const RawDataRealatedEntityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RawDataRealatedEntityList = () => (
  <List filters={RawDataRealatedEntityFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <NumberField source="priority" label="Priority" />
    </Datagrid>
  </List>
);
