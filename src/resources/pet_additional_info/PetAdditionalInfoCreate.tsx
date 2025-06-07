import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetAdditionalInfoCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="value" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="pet_id" validate={[]} />
          <ReferenceInput source="type_id" reference="pet_additional_info_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="description" validate={[]} />
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
