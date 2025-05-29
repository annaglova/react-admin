import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const AwardInCompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AwardInCompetitionList = () => (
  <List filters={AwardInCompetitionFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="award_id" />
      <TextField source="competition_id" />
    </Datagrid>
  </List>
);
