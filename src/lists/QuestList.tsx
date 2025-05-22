import { Datagrid, List, TextInput } from "react-admin";

const QuestFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const QuestList = () => (
  <List filters={QuestFilters}>
    <Datagrid>{/* Додай потрібні поля */}</Datagrid>
  </List>
);
