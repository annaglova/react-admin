import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ContactInCompetitionCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id" validate={[]} />
          <BooleanInput source="international_judgment" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="national_judgment" validate={[]} />
          <ReferenceInput source="competition_id" reference="competition">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
