import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CompetitionBackupFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CompetitionBackupList = () => (
  <List filters={CompetitionBackupFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <BooleanField source="exists_award" label="Exists Award" />
      <BooleanField source="exists_place" label="Exists Place" />
      <BooleanField source="exists_qualification" label="Exists Qualification" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="provider_id" reference="account" label="Provider Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="type_id" reference="competition_type" label="Type Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
