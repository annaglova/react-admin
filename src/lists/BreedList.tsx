import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
  UrlField,
} from "react-admin";

const breedFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedList = () => (
  <List filters={breedFilters}>
    <Datagrid>
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <DateField source="notes" />
      <ReferenceField source="pet_type_id" reference="pet_types" />
      <BooleanField source="differ_by_coat_color" />
      <BooleanField source="differ_by_coat_type" />
      <BooleanField source="differ_by_size" />
      <ReferenceField source="language_id" reference="languages" />
      <TextField source="authentic_name" />
      <BooleanField source="differ_by_body_feature" />
      <NumberField source="pet_profile_count" />
      <ReferenceField source="category_id" reference="categories" />
      <NumberField source="kennel_count" />
      <BooleanField source="has_related_breed" />
      <TextField source="admin_name" />
      <UrlField source="url" />
      <ReferenceField source="account_id" reference="accounts" />
      <DateField source="patron_count" />
      <DateField source="avatar_url" />
      <NumberField source="rating" />
      <DateField source="achievement_progress" />
      <ReferenceField source="cover_id" reference="covers" />
      <DateField source="payment_rating" />
      <ReferenceField source="public_data_id" reference="public_data" />
    </Datagrid>
  </List>
);
