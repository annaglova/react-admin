import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const PostFeedFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const PostFeedList = () => (
  <List filters={PostFeedFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="pet_id" />
      <TextField source="account_id" />
      <TextField source="contact_id" />
      <TextField source="litter_id" />
      <TextField source="pet_breed_id" />
    </Datagrid>
  </List>
);
