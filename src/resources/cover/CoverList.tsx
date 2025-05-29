import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const CoverFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CoverList = () => (
  <List filters={CoverFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="redirect_url" />
      <TextField source="avatar_url" />
      <TextField source="type_id" />
      <TextField source="owner_id" />
      <TextField source="url" />
      <TextField source="breed_id" />
      <BooleanField source="is_default" />
    </Datagrid>
  </List>
);
