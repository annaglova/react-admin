import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const QuestCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="url"  />
          <ReferenceInput source="type_id" reference="quest_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="reward"  />
          <NumberInput source="frequency_interval"  />
          <ReferenceInput source="frequency_id" reference="quest_frequency">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="deactivated"  />
          <TextInput source="description"  />
          <NumberInput source="total_steps"  />
          <DateInput source="deadline_date"  />
      </>
    }
  />
);
