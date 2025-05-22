import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const PostFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PostList = () => (
  <List filters={PostFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <DateField source="publication_date" />
      <ReferenceField source="type_id" reference="types" />
      <ReferenceField source="state_id" reference="states" />
      <TextField source="text" />
      <DateField source="url" />
      <ReferenceField source="master_post_id" reference="master_posts" />
      <BooleanField source="is_moment" />
      <ReferenceField source="author_id" reference="authors" />
      <TextField source="name" />
      <DateField source="date" />
      <ReferenceField source="event_id" reference="events" />
      <DateField source="latitude" />
      <DateField source="longitude" />
      <TextField source="photos" />
      <TextField source="participants" />
      <ReferenceField source="cover_id" reference="covers" />
    </Datagrid>
  </List>
);
