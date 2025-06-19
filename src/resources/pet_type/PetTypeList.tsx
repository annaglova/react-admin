import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PetTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetTypeList = () => (
  <List filters={PetTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <TextField source="url" label="Url" />
      <TextField source="avatar_url" label="Avatar Url" />
      <ReferenceField source="public_data_id" reference="public_data" label="Public Data Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="measurements" label="Measurements" />
    </Datagrid>
  </List>
);
