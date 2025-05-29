import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const AwardInCompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AwardInCompetitionList = () => (
  <List filters={AwardInCompetitionFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="award_id" reference="award">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="competition_id" reference="competition">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
