import { Datagrid, List, TextInput } from "react-admin";

const ContactFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ContactList = () => (
  <List filters={ContactFilters}>
    <Datagrid>{/* Додай потрібні поля */}</Datagrid>
  </List>
);
