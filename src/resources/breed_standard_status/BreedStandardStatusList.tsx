import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const BreedStandardStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedStandardStatusList = () => (
  <List filters={BreedStandardStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="provider_id" reference="account" label="Provider Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
