import { NumberInput, ReferenceInput, SelectInput, required } from "react-admin";
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
          <ReferenceInput source="contact_id" reference="contact">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="rating"  />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="place"  />
          <ReferenceInput source="contact_role_id" reference="contact_role">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
