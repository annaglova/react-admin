import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ContactInCompetitionCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id"  />
          <BooleanInput source="international_judgment"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="national_judgment"  />
          <ReferenceInput source="competition_id" reference="competition">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
