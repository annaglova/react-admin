import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const BreedFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const BreedList = () => (
  <List filters={BreedFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="pet_type_id" />
      <BooleanField source="differ_by_coat_color" />
      <BooleanField source="differ_by_coat_type" />
      <BooleanField source="differ_by_size" />
      <TextField source="language_id" />
      <TextField source="authentic_name" />
      <BooleanField source="differ_by_body_feature" />
      <NumberField source="pet_profile_count" />
      <TextField source="category_id" />
      <NumberField source="kennel_count" />
      <BooleanField source="has_related_breed" />
      <TextField source="admin_name" />
      <TextField source="url" />
      <TextField source="account_id" />
      <NumberField source="patron_count" />
      <TextField source="avatar_url" />
      <NumberField source="rating" />
      <NumberField source="achievement_progress" />
      <TextField source="cover_id" />
      <NumberField source="payment_rating" />
      <TextField source="public_data_id" />
    </Datagrid>
  </List>
);
