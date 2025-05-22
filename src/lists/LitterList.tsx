import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const LitterFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const LitterList = () => (
  <List filters={LitterFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <DateField source="notes" />
      <ReferenceField source="father_id" reference="fathers" />
      <ReferenceField source="mother_id" reference="mothers" />
      <ReferenceField source="pet_type_id" reference="pet_types" />
      <ReferenceField source="mating_period_id" reference="mating_periods" />
      <DateField source="date_of_birth" />
      <ReferenceField source="status_id" reference="statuses" />
      <ReferenceField source="kennel_id" reference="kennels" />
      <ReferenceField source="breeder_id" reference="breeders" />
      <DateField source="url" />
      <ReferenceField source="letter_id" reference="letters" />
      <NumberField source="male_amount" />
      <NumberField source="female_amount" />
      <BooleanField source="is_public" />
      <ReferenceField source="cover_id" reference="covers" />
      <TextField source="start_date" />
      <TextField source="end_date" />
    </Datagrid>
  </List>
);
