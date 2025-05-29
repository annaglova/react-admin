import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const QualificationInCompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const QualificationInCompetitionList = () => (
  <List filters={QualificationInCompetitionFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="pet_qualification_id" />
      <TextField source="competition_id" />
    </Datagrid>
  </List>
);
