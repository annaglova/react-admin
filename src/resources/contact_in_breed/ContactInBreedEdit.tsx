import { NumberInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ContactInBreedEdit = () => (
  <ResourceEditLayout
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
