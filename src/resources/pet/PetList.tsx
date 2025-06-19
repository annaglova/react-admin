import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PetFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetList = () => (
  <List filters={PetFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" label="Name" />
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="sex_id" reference="sex" label="Sex Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="father_id" reference="pet" label="Father Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="mother_id" reference="pet_manchester_terrier_toy" label="Mother Id">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="date_of_birth" label="Date Of Birth" />
      <ReferenceField source="owner_id" reference="contact" label="Owner Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="kennel_id" reference="account" label="Kennel Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
