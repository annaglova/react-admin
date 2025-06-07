import { BooleanField, Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PetServiceTypeByEntityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetServiceTypeByEntityList = () => (
  <List filters={PetServiceTypeByEntityFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="entity_name" label="Entity Name" />
      <ReferenceField source="pet_service_type_id" reference="pet_service_type" label="Pet Service Type Id">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="transfer_to_litter" label="Transfer To Litter" />
      <BooleanField source="transfer_to_account" label="Transfer To Account" />
    </Datagrid>
  </List>
);
