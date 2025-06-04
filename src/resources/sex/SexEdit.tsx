import { NumberInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const SexEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="code" />
          <NumberInput source="order" />
      </>
    }
  />
);
