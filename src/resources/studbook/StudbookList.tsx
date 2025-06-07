import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const StudbookFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const StudbookList = () => (
  <List filters={StudbookFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="account_id" reference="account" label="Account Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="status_id" reference="studbook_status" label="Status Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="type_id" reference="studbook_type" label="Type Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="alternate_names" label="Alternate Names" />
    </Datagrid>
  </List>
);
