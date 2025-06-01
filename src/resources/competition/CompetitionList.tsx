import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CompetitionList = () => (
  <List filters={CompetitionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="parent_id" reference="competition">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="type_id" reference="competition_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="template_id" reference="competition">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="exists_qualification" />
      <BooleanField source="exists_place" />
      <BooleanField source="exists_award" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="order" />
      <ReferenceField source="category_id" reference="competition_category">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
