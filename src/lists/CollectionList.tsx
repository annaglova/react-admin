import { Datagrid, List, TextInput } from "react-admin";

const CollectionFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CollectionList = () => (
  <List filters={CollectionFilters}>
    <Datagrid>{/* Додай потрібні поля */}</Datagrid>
  </List>
);
