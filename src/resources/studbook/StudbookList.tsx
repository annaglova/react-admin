import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const StudbookFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const StudbookList = () => (
  <List filters={StudbookFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="status_id" reference="studbook_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="type_id" reference="studbook_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="alternate_names" />
    </Datagrid>
  </List>
);
