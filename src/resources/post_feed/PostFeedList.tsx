import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PostFeedFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PostFeedList = () => (
  <List filters={PostFeedFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="pet_id" label="Pet Id" />
      <ReferenceField source="account_id" reference="account" label="Account Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="contact_id" reference="contact" label="Contact Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="litter_id" reference="litter" label="Litter Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="pet_breed_id" label="Pet Breed Id" />
    </Datagrid>
  </List>
);
