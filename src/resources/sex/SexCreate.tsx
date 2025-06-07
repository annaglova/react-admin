import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const SexCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="code" validate={[]} />
          <NumberInput source="order" validate={[]} />
      </>
    }
  />
);
