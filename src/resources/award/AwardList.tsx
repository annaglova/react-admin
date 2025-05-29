import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const AwardFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AwardList = () => (
  <List filters={AwardFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
