import { BooleanField, Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const EntitySchemaLookupFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const EntitySchemaLookupList = () => (
  <List filters={EntitySchemaLookupFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_public" />
      <TextField source="public_name" />
    </Datagrid>
  </List>
);
