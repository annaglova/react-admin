import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CompetitionList = () => (
  <List filters={CompetitionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="notes" label="Notes" />
      <ReferenceField source="provider_id" reference="account" label="Provider Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="parent_id" reference="competition" label="Parent Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="type_id" reference="competition_type" label="Type Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="template_id" reference="competition" label="Template Id">
  <TextField source="name" />
</ReferenceField>
      <BooleanField source="exists_qualification" label="Exists Qualification" />
      <BooleanField source="exists_place" label="Exists Place" />
      <BooleanField source="exists_award" label="Exists Award" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="order" label="Order" />
      <ReferenceField source="category_id" reference="competition_category" label="Category Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
