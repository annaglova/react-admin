import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const AwardInCompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AwardInCompetitionList = () => (
  <List filters={AwardInCompetitionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <ReferenceField source="award_id" reference="award" label="Award Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="competition_id" reference="competition" label="Competition Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
