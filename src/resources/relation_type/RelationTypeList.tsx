import { BooleanField, Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const RelationTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RelationTypeList = () => (
  <List filters={RelationTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <BooleanField source="for_contact_contact" label="For Contact Contact" />
      <BooleanField source="for_account_contact" label="For Account Contact" />
      <BooleanField source="for_contact_account" label="For Contact Account" />
      <BooleanField source="for_account_account" label="For Account Account" />
      <ReferenceField source="reverse_relation_type_id" reference="relation_type" label="Reverse Relation Type Id">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="include_into_container" label="Include Into Container" />
    </Datagrid>
  </List>
);
