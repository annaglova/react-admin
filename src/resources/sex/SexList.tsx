import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

const SexFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const SexList = () => (
  <List filters={SexFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="code" />
      <NumberField source="order" />
    </Datagrid>
  </List>
);
