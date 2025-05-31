import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

const BreedGroupFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedGroupList = () => (
  <List filters={BreedGroupFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="code" />
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
