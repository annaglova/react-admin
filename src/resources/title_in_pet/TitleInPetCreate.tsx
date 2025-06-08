import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const TitleInPetCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="title_id" reference="title">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_id"  />
          <BooleanInput source="is_confirmed"  />
          <DateInput source="date"  />
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="description"  />
          <NumberInput source="amount"  />
          <TextInput source="raw_title"  />
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
