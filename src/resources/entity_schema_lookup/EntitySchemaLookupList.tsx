import { BooleanField, Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const EntitySchemaLookupFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const EntitySchemaLookupList = () => (
  <List filters={EntitySchemaLookupFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <BooleanField source="is_public" label="Is Public" />
      <TextField source="public_name" label="Public Name" />
    </Datagrid>
  </List>
);
