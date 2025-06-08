import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ContactCareerCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id"  />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="department_id" reference="department">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="job_id" reference="job">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="job_title"  />
          <BooleanInput source="primary"  />
          <BooleanInput source="current"  />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="start_date"  />
          <DateInput source="due_date"  />
          <ReferenceInput source="job_change_reason_id" reference="job_change_reason">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="description"  />
          <ReferenceInput source="decision_role_id" reference="contact_decision_role">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="rating"  />
      </>
    }
  />
);
