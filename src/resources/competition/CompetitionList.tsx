import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const CompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CompetitionList = () => (
  <List filters={CompetitionFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="provider_id" />
      <TextField source="parent_id" />
      <TextField source="type_id" />
      <TextField source="template_id" />
      <BooleanField source="exists_qualification" />
      <BooleanField source="exists_place" />
      <BooleanField source="exists_award" />
      <TextField source="pet_type_id" />
      <NumberField source="order" />
      <TextField source="category_id" />
      <TextField source="breed_id" />
    </Datagrid>
  </List>
);
