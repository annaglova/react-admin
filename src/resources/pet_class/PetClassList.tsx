import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

const PetClassFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetClassList = () => (
  <List filters={PetClassFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="age_to" />
      <NumberField source="age_from" />
      <NumberField source="code" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
