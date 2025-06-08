import { BooleanInput, DateInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetIdentifierEdit = () => (
  <ResourceEditLayout
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
