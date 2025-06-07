import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const UserQuestStepCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="user_quest_id" reference="user_quest">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="description" validate={[]} />
          <TextInput source="intitial_provider_code" validate={[]} />
          <TextInput source="provider_code" validate={[]} />
          <NumberInput source="position" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="finish_date" validate={[]} />
          <TextInput source="output" validate={[]} />
          <TextInput source="input" validate={[]} />
          <TextInput source="dependencies" validate={[]} />
      </>
    }
  />
);
