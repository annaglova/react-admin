import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const BreedFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedList = () => (
  <List filters={BreedFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="notes" label="Notes" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
  <TextField source="name" />
</ReferenceField>
      <BooleanField source="differ_by_coat_color" label="Differ By Coat Color" />
      <BooleanField source="differ_by_coat_type" label="Differ By Coat Type" />
      <BooleanField source="differ_by_size" label="Differ By Size" />
      <ReferenceField source="language_id" reference="sys_language" label="Language Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="authentic_name" label="Authentic Name" />
      <BooleanField source="differ_by_body_feature" label="Differ By Body Feature" />
      <NumberField source="pet_profile_count" label="Pet Profile Count" />
      <ReferenceField source="category_id" reference="breed_category" label="Category Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="kennel_count" label="Kennel Count" />
      <BooleanField source="has_related_breed" label="Has Related Breed" />
      <TextField source="admin_name" label="Admin Name" />
      <TextField source="url" label="Url" />
      <ReferenceField source="account_id" reference="account" label="Account Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="patron_count" label="Patron Count" />
      <TextField source="avatar_url" label="Avatar Url" />
      <NumberField source="rating" label="Rating" />
      <NumberField source="achievement_progress" label="Achievement Progress" />
      <ReferenceField source="cover_id" reference="cover" label="Cover Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="payment_rating" label="Payment Rating" />
      <ReferenceField source="public_data_id" reference="public_data" label="Public Data Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
