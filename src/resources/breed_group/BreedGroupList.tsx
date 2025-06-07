import { Datagrid, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const BreedGroupFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedGroupList = () => (
  <List filters={BreedGroupFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <NumberField source="code" label="Code" />
      <ReferenceField source="provider_id" reference="account" label="Provider Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
