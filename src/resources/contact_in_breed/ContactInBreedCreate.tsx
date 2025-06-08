import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ContactInBreedCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="contact_id"  />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="rating"  />
          <NumberInput source="place"  />
      </>
    }
  />
);
