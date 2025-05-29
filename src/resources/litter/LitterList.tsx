import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const LitterFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const LitterList = () => (
  <List filters={LitterFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="father_id" />
      <TextField source="mother_id" />
      <TextField source="pet_type_id" />
      <TextField source="mating_period_id" />
      <DateField source="date_of_birth" />
      <TextField source="status_id" />
      <TextField source="kennel_id" />
      <TextField source="breeder_id" />
      <TextField source="url" />
      <TextField source="letter_id" />
      <NumberField source="male_amount" />
      <NumberField source="female_amount" />
      <BooleanField source="is_public" />
      <TextField source="cover_id" />
      <DateField source="start_date" />
      <DateField source="end_date" />
    </Datagrid>
  </List>
);
