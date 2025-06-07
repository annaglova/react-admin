import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const LitterCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <TextInput source="father_id" validate={[]} />
          <TextInput source="mother_id" validate={[]} />
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="mating_period_id" reference="period">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="date_of_birth" validate={[]} />
          <ReferenceInput source="status_id" reference="litter_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="kennel_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="breeder_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="url" validate={[]} />
          <ReferenceInput source="letter_id" reference="letter">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="male_amount" validate={[]} />
          <NumberInput source="female_amount" validate={[]} />
          <BooleanInput source="is_public" validate={[]} />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="start_date" validate={[]} />
          <DateInput source="end_date" validate={[]} />
      </>
    }
  />
);
