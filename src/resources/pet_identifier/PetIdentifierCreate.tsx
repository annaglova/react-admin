import { BooleanInput, DateInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetIdentifierCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="value"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="pet_identifier_type_id" reference="pet_identifier_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_id"  />
          <DateInput source="date"  />
          <ReferenceInput source="studbook_id" reference="studbook">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="number"  />
          <BooleanInput source="is_processed"  />
          <TextInput source="trim_value"  />
          <BooleanInput source="is_public"  />
      </>
    }
  />
);
