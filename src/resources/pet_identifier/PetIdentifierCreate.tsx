import { BooleanInput, DateInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetIdentifierCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="value" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="pet_identifier_type_id" reference="pet_identifier_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="pet_id" validate={[]} />
          <DateInput source="date" validate={[]} />
          <ReferenceInput source="studbook_id" reference="studbook">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="number" validate={[]} />
          <BooleanInput source="is_processed" validate={[]} />
          <TextInput source="trim_value" validate={[]} />
          <BooleanInput source="is_public" validate={[]} />
      </>
    }
  />
);
