import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const AccountIndustryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountIndustryList = () => (
  <List filters={AccountIndustryFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
