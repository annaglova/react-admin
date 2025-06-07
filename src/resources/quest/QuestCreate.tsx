import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const QuestCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="url" validate={[]} />
          <ReferenceInput source="type_id" reference="quest_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="reward" validate={[]} />
          <NumberInput source="frequency_interval" validate={[]} />
          <ReferenceInput source="frequency_id" reference="quest_frequency">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="deactivated" validate={[]} />
          <TextInput source="description" validate={[]} />
          <NumberInput source="total_steps" validate={[]} />
          <DateInput source="deadline_date" validate={[]} />
      </>
    }
  />
);
