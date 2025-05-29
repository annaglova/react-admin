import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const PostFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PostList = () => (
  <List filters={PostFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <DateField source="publication_date" />
      <TextField source="type_id" />
      <TextField source="state_id" />
      <TextField source="text" />
      <TextField source="url" />
      <TextField source="master_post_id" />
      <BooleanField source="is_moment" />
      <TextField source="author_id" />
      <TextField source="name" />
      <DateField source="date" />
      <TextField source="event_id" />
      <NumberField source="latitude" />
      <NumberField source="longitude" />
      <TextField source="photos" />
      <TextField source="participants" />
      <TextField source="cover_id" />
    </Datagrid>
  </List>
);
