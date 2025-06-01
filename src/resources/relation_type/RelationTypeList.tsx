import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const RelationTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RelationTypeList = () => (
  <List filters={RelationTypeFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="for_contact_contact" />
      <BooleanField source="for_account_contact" />
      <BooleanField source="for_contact_account" />
      <BooleanField source="for_account_account" />
      <ReferenceField source="reverse_relation_type_id" reference="relation_type">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="include_into_container" />
    </Datagrid>
  </List>
);
