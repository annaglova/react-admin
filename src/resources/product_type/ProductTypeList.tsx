import { BooleanField, Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ProductTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProductTypeList = () => (
  <List filters={ProductTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <BooleanField source="is_service" label="Is Service" />
      <ReferenceField source="category_id" reference="product_category" label="Category Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
