import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ContactInBreedCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="contact_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="rating" validate={[]} />
          <NumberInput source="place" validate={[]} />
      </>
    }
  />
);
