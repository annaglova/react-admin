import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const CoverFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CoverList = () => (
  <List filters={CoverFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <DateField source="notes" />
      <DateField source="redirect_url" />
      <TextField source="avatar_url" />
      <ReferenceField source="type_id" reference="types" />
      <ReferenceField source="owner_id" reference="owners" />
      <DateField source="url" />
      <ReferenceField source="breed_id" reference="breeds" />
      <BooleanField source="is_default" />
    </Datagrid>
  </List>
);
