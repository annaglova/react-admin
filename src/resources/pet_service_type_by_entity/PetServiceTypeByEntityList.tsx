import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const PetServiceTypeByEntityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const PetServiceTypeByEntityList = () => (
  <List filters={PetServiceTypeByEntityFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="entity_name" />
      <TextField source="pet_service_type_id" />
      <BooleanField source="transfer_to_litter" />
      <BooleanField source="transfer_to_account" />
    </Datagrid>
  </List>
);
