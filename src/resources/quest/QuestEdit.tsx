import { BooleanInput, DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const QuestEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="url" />
      <ReferenceInput source="type_id" reference="quest_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="reward" />
      <NumberInput source="frequency_interval" />
      <ReferenceInput source="frequency_id" reference="quest_frequency">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="deactivated" />
      <TextInput source="description" />
      <NumberInput source="total_steps" />
      <DateInput source="deadline_date" />
    </SimpleForm>
  </Edit>
);
