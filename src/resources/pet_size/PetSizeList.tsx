import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PetSizeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetSizeList = () => (
  <List filters={PetSizeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
