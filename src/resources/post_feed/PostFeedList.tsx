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
      <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="account_id" reference="account" label="Account Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="contact_id" reference="contact" label="Contact Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="litter_id" reference="litter" label="Litter Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
