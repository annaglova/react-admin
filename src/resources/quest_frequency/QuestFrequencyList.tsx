import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const QuestFrequencyFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const QuestFrequencyList = () => (
  <List filters={QuestFrequencyFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <TextField source="code" label="Code" />
    </Datagrid>
  </List>
);
