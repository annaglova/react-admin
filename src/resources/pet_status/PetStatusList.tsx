import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PetStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetStatusList = () => (
  <List filters={PetStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <TextField source="code" label="Code" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
