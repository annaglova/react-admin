import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PostFeedFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PostFeedList = () => (
  <List filters={PostFeedFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="pet_id" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="contact_id" reference="contact">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="litter_id" reference="litter">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="pet_breed_id" />
    </Datagrid>
  </List>
);
