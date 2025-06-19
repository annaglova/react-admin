import { BooleanField, Datagrid, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ProductFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProductList = () => (
  <List filters={ProductFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="code" label="Code" />
      <ReferenceField source="unit_id" reference="unit" label="Unit Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="currency_id" reference="currency" label="Currency Id">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="price" label="Price" />
      <TextField source="url" label="Url" />
      <ReferenceField source="type_id" reference="product_type" label="Type Id">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="active" label="Active" />
      <TextField source="owner_id" label="Owner Id" />
      <TextField source="description" label="Description" />
      <ReferenceField source="product_source_id" reference="product_source" label="Product Source Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="notes" label="Notes" />
      <BooleanField source="is_archive" label="Is Archive" />
      <ReferenceField source="category_id" reference="product_category" label="Category Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="short_description" label="Short Description" />
      <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="benefits" label="Benefits" />
      <TextField source="general_conditions" label="General Conditions" />
      <TextField source="stripe_product_id" label="Stripe Product Id" />
      <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
