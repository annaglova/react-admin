import { BooleanInput, DateInput, NumberInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const UserQuestEdit = () => (
  <ResourceEditLayout
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
