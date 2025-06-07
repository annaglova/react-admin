import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PostFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PostList = () => (
  <List filters={PostFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <DateField source="publication_date" label="Publication Date" />
      <ReferenceField source="type_id" reference="post_type" label="Type Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="state_id" reference="post_state" label="State Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="text" label="Text" />
      <TextField source="url" label="Url" />
      <ReferenceField source="master_post_id" reference="post" label="Master Post Id">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="is_moment" label="Is Moment" />
      <TextField source="author_id" label="Author Id" />
      <TextField source="name" label="Name" />
      <DateField source="date" label="Date" />
      <ReferenceField source="event_id" reference="event" label="Event Id">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="latitude" label="Latitude" />
      <NumberField source="longitude" label="Longitude" />
      <TextField source="photos" label="Photos" />
      <TextField source="participants" label="Participants" />
      <ReferenceField source="cover_id" reference="cover" label="Cover Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
