import { BooleanInput, DateInput, NumberInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const UserQuestCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <DateInput source="finish_date" />
          <TextInput source="contact_id" />
          <DateInput source="deadline_date" />
          <BooleanInput source="deactivated" />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="reward" />
          <TextInput source="description" />
          <NumberInput source="frequency_interval" />
      </>
    }
  />
);
