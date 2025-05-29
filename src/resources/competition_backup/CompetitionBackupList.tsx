import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const CompetitionBackupFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CompetitionBackupList = () => (
  <List filters={CompetitionBackupFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="exists_award" />
      <BooleanField source="exists_place" />
      <BooleanField source="exists_qualification" />
      <TextField source="pet_type_id" />
      <TextField source="provider_id" />
      <TextField source="type_id" />
    </Datagrid>
  </List>
);
