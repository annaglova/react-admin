import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const ProductFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProductList = () => (
  <List filters={ProductFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="code" />
      <TextField source="unit_id" />
      <TextField source="currency_id" />
      <NumberField source="price" />
      <TextField source="url" />
      <TextField source="type_id" />
      <BooleanField source="active" />
      <TextField source="owner_id" />
      <TextField source="description" />
      <TextField source="product_source_id" />
      <TextField source="notes" />
      <BooleanField source="is_archive" />
      <TextField source="category_id" />
      <TextField source="short_description" />
      <TextField source="pet_id" />
      <TextField source="benefits" />
      <TextField source="general_conditions" />
      <TextField source="stripe_product_id" />
      <TextField source="pet_breed_id" />
    </Datagrid>
  </List>
);
