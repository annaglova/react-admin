import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ProductFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProductList = () => (
  <List filters={ProductFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="code" />
      <ReferenceField source="unit_id" reference="unit">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="currency_id" reference="currency">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="price" />
      <TextField source="url" />
      <ReferenceField source="type_id" reference="product_type">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="active" />
      <TextField source="owner_id" />
      <TextField source="description" />
      <ReferenceField source="product_source_id" reference="product_source">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="notes" />
      <BooleanField source="is_archive" />
      <ReferenceField source="category_id" reference="product_category">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="short_description" />
      <TextField source="pet_id" />
      <TextField source="benefits" />
      <TextField source="general_conditions" />
      <TextField source="stripe_product_id" />
      <TextField source="pet_breed_id" />
    </Datagrid>
  </List>
);
