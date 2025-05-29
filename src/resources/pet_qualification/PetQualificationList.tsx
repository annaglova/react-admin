import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const PetQualificationFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetQualificationList = () => (
  <List filters={PetQualificationFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="pet_type_id" />
      <NumberField source="code" />
      <TextField source="provider_id" />
    </Datagrid>
  </List>
);
