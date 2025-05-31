import { BooleanInput, Create, DateInput, NumberInput, SimpleForm, TextInput } from "react-admin";

export const UserQuestCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <DateInput source="finish_date" />
      <TextInput source="contact_id" />
      <DateInput source="deadline_date" />
      <BooleanInput source="deactivated" />
      <NumberInput source="reward" />
      <TextInput source="description" />
      <NumberInput source="frequency_interval" />
    </SimpleForm>
  </Create>
);
