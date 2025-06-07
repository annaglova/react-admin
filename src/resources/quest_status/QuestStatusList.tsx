import { Datagrid, DateField, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const QuestStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const QuestStatusList = () => (
  <List filters={QuestStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <TextField source="code" label="Code" />
      <NumberField source="order" label="Order" />
    </Datagrid>
  </List>
);
