import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ContactSalutationTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ContactSalutationTypeList = () => (
  <List filters={ContactSalutationTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
