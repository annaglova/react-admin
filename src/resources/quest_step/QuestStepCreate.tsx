import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const QuestStepCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="quest_id" reference="quest">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="description" validate={[]} />
          <TextInput source="intitial_provider_code" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="provider_code" validate={[]} />
          <NumberInput source="position" validate={[]} />
          <TextInput source="dependencies" validate={[]} />
      </>
    }
  />
);
