import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const BreedSubsectionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const BreedSubsectionList = () => (
  <List filters={BreedSubsectionFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="breed_section_id" />
      <TextField source="breed_group_id" />
      <NumberField source="code" />
    </Datagrid>
  </List>
);
