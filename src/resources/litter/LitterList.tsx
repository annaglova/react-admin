import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const LitterFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const LitterList = () => (
  <List filters={LitterFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="notes" label="Notes" />
      <TextField source="father_id" label="Father Id" />
      <TextField source="mother_id" label="Mother Id" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="mating_period_id" reference="period" label="Mating Period Id">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="date_of_birth" label="Date Of Birth" />
      <ReferenceField source="status_id" reference="litter_status" label="Status Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="kennel_id" reference="account" label="Kennel Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="breeder_id" label="Breeder Id" />
      <TextField source="url" label="Url" />
      <ReferenceField source="letter_id" reference="letter" label="Letter Id">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="male_amount" label="Male Amount" />
      <NumberField source="female_amount" label="Female Amount" />
      <BooleanField source="is_public" label="Is Public" />
      <ReferenceField source="cover_id" reference="cover" label="Cover Id">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="start_date" label="Start Date" />
      <DateField source="end_date" label="End Date" />
    </Datagrid>
  </List>
);
