import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const AccountOwnershipFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountOwnershipList = () => (
  <List filters={AccountOwnershipFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="country_id" reference="country" label="Country Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
