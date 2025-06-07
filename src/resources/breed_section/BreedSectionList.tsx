import { Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const BreedSectionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedSectionList = () => (
  <List filters={BreedSectionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <NumberField source="code" label="Code" />
      <ReferenceField source="breed_group_id" reference="breed_group" label="Breed Group Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
