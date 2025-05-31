import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const PetServiceByOptionsFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetServiceByOptionsList = () => (
  <List filters={PetServiceByOptionsFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="status_id" reference="pet_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="sex_id" reference="sex">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="service_type_id" reference="pet_service_type">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
