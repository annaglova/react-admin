import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const BreedFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedList = () => (
  <List filters={BreedFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="category_id" reference="breed_category" label="Category Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="admin_name" label="Admin Name" />
      <TextField source="url" label="Url" />
    </Datagrid>
  </List>
);
