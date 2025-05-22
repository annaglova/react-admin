import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const ProductFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProductList = () => (
  <List filters={ProductFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <TextField source="name" />
      <TextField source="code" />
      <ReferenceField source="unit_id" reference="units" />
      <ReferenceField source="currency_id" reference="currencies" />
      <NumberField source="price" />
      <DateField source="url" />
      <ReferenceField source="type_id" reference="types" />
      <BooleanField source="active" />
      <DateField source="process_listeners" />
      <ReferenceField source="owner_id" reference="owners" />
      <DateField source="description" />
      <ReferenceField source="product_source_id" reference="product_sources" />
      <DateField source="notes" />
      <BooleanField source="is_archive" />
      <ReferenceField source="category_id" reference="categories" />
      <DateField source="short_description" />
      <ReferenceField source="pet_id" reference="pets" />
      <DateField source="benefits" />
      <DateField source="general_conditions" />
      <ReferenceField source="stripe_product_id" reference="stripe_products" />
      <ReferenceField source="pet_breed_id" reference="pet_breeds" />
    </Datagrid>
  </List>
);
