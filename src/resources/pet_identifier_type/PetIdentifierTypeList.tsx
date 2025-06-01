import { BooleanField, Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const PetIdentifierTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetIdentifierTypeList = () => (
  <List filters={PetIdentifierTypeFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_public" />
    </Datagrid>
  </List>
);
