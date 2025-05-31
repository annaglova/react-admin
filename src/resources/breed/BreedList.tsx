import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

// @MANUAL

const BreedFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedList = () => (
  <List filters={BreedFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="language_id" reference="sys_language">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="authentic_name" />

      <NumberField source="pet_profile_count" />
      <ReferenceField source="category_id" reference="breed_category">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="kennel_count" />

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
