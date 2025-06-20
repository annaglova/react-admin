import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const QualificationInCompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const QualificationInCompetitionList = () => (
  <List filters={QualificationInCompetitionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <ReferenceField source="pet_qualification_id" reference="pet_qualification" label="Pet Qualification Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="competition_id" reference="competition" label="Competition Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
