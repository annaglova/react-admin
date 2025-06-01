import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const BreedFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedList = () => (
  <List filters={BreedFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="differ_by_coat_color" />
      <BooleanField source="differ_by_coat_type" />
      <BooleanField source="differ_by_size" />
      <ReferenceField source="language_id" reference="sys_language">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="authentic_name" />
      <BooleanField source="differ_by_body_feature" />
      <NumberField source="pet_profile_count" />
      <ReferenceField source="category_id" reference="breed_category">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="kennel_count" />
      <BooleanField source="has_related_breed" />
      <TextField source="admin_name" />
      <TextField source="url" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="patron_count" />
      <TextField source="avatar_url" />
      <NumberField source="rating" />
      <NumberField source="achievement_progress" />
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="payment_rating" />
      <ReferenceField source="public_data_id" reference="public_data">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
