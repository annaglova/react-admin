import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const CompetitionFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CompetitionList = () => (
  <List filters={CompetitionFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <DateField source="notes" />
      <ReferenceField source="provider_id" reference="providers" />
      <ReferenceField source="parent_id" reference="parents" />
      <ReferenceField source="type_id" reference="types" />
      <ReferenceField source="template_id" reference="templates" />
      <BooleanField source="exists_qualification" />
      <BooleanField source="exists_place" />
      <BooleanField source="exists_award" />
      <ReferenceField source="pet_type_id" reference="pet_types" />
      <DateField source="order" />
      <ReferenceField source="category_id" reference="categories" />
      <ReferenceField source="breed_id" reference="breeds" />
    </Datagrid>
  </List>
);
