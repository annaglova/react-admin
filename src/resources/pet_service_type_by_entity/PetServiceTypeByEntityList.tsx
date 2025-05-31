import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const PetServiceTypeByEntityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetServiceTypeByEntityList = () => (
  <List filters={PetServiceTypeByEntityFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="entity_name" />
      <ReferenceField source="pet_service_type_id" reference="pet_service_type">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="transfer_to_litter" />
      <BooleanField source="transfer_to_account" />
    </Datagrid>
  </List>
);
