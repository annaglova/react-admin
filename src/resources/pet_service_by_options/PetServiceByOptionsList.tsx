import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PetServiceByOptionsFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetServiceByOptionsList = () => (
  <List filters={PetServiceByOptionsFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <ReferenceField source="status_id" reference="pet_status" label="Status Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="sex_id" reference="sex" label="Sex Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="service_type_id" reference="pet_service_type" label="Service Type Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
