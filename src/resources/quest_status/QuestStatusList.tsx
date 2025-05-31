import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const QuestStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const QuestStatusList = () => (
  <List filters={QuestStatusFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <NumberField source="order" />
    </Datagrid>
  </List>
);
