import { Datagrid, List, TextInput } from "react-admin";

const PublicDataFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PublicDataList = () => (
  <List filters={PublicDataFilters}>
    <Datagrid>{/* Додай потрібні поля */}</Datagrid>
  </List>
);
