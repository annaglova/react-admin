import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const BreedStandardFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedStandardList = () => (
  <List filters={BreedStandardFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="subsection_id" />
      <TextField source="section_id" />
      <TextField source="group_id" />
      <TextField source="code" />
      <TextField source="provider_id" />
      <TextField source="breed_id" />
      <DateField source="effective" />
      <DateField source="approved" />
      <TextField source="link" />
      <BooleanField source="working_trial" />
      <TextField source="status_id" />
      <BooleanField source="has_variable_divisions" />
      <TextField source="name" />
    </Datagrid>
  </List>
);
