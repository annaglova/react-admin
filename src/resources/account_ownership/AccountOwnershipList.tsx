import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const AccountOwnershipFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountOwnershipList = () => (
  <List filters={AccountOwnershipFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="country_id" reference="country">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
