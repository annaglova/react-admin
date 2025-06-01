import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const LitterFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const LitterList = () => (
  <List filters={LitterFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="father_id" />
      <TextField source="mother_id" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="mating_period_id" reference="period">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="date_of_birth" />
      <ReferenceField source="status_id" reference="litter_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="kennel_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="breeder_id" />
      <TextField source="url" />
      <ReferenceField source="letter_id" reference="letter">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="male_amount" />
      <NumberField source="female_amount" />
      <BooleanField source="is_public" />
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="start_date" />
      <DateField source="end_date" />
    </Datagrid>
  </List>
);
