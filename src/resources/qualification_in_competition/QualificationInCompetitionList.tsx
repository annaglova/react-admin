import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const QualificationInCompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const QualificationInCompetitionList = () => (
  <List filters={QualificationInCompetitionFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="pet_qualification_id" reference="pet_qualification">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="competition_id" reference="competition">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
