import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const PostFeedFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PostFeedList = () => (
  <List filters={PostFeedFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <ReferenceField source="pet_id" reference="pets" />
      <ReferenceField source="account_id" reference="accounts" />
      <ReferenceField source="contact_id" reference="contacts" />
      <ReferenceField source="litter_id" reference="litter" />
      <ReferenceField source="pet_breed_id" reference="pet_breeds" />
    </Datagrid>
  </List>
);
