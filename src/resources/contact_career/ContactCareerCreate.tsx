import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ContactCareerCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="department_id" reference="department">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="job_id" reference="job">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="job_title" validate={[]} />
          <BooleanInput source="primary" validate={[]} />
          <BooleanInput source="current" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="start_date" validate={[]} />
          <DateInput source="due_date" validate={[]} />
          <ReferenceInput source="job_change_reason_id" reference="job_change_reason">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="description" validate={[]} />
          <ReferenceInput source="decision_role_id" reference="contact_decision_role">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="rating" validate={[]} />
      </>
    }
  />
);
