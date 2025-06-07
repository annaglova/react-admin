import { BooleanInput, DateInput, NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const UserQuestCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <DateInput source="finish_date" validate={[]} />
          <TextInput source="contact_id" validate={[]} />
          <DateInput source="deadline_date" validate={[]} />
          <BooleanInput source="deactivated" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="reward" validate={[]} />
          <TextInput source="description" validate={[]} />
          <NumberInput source="frequency_interval" validate={[]} />
      </>
    }
  />
);
