import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const UserQuestStageCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="title" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="output" validate={[]} />
          <TextInput source="input" validate={[]} />
          <ReferenceInput source="user_quest_id" reference="user_quest">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="finish_date" validate={[]} />
          <ReferenceInput source="stage_id" reference="quest_stage">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="order" validate={[]} />
          <TextInput source="description" validate={[]} />
          <TextInput source="business_process_id" validate={[]} />
          <TextInput source="code" validate={[]} />
      </>
    }
  />
);
