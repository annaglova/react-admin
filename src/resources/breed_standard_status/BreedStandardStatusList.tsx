import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const BreedStandardStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedStandardStatusList = () => (
  <List filters={BreedStandardStatusFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
