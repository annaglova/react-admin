import { BooleanInput, Create, DateInput, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const LitterCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="notes" />
      <TextInput source="father_id" />
      <TextInput source="mother_id" />
      <ReferenceInput source="pet_type_id" reference="pet_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="mating_period_id" reference="period">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="date_of_birth" />
      <ReferenceInput source="status_id" reference="litter_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="kennel_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="breeder_id" />
      <TextInput source="url" />
      <ReferenceInput source="letter_id" reference="letter">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="male_amount" />
      <NumberInput source="female_amount" />
      <BooleanInput source="is_public" />
      <ReferenceInput source="cover_id" reference="cover">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="start_date" />
      <DateInput source="end_date" />
    </SimpleForm>
  </Create>
);
