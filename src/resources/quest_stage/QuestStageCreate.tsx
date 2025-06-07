import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const QuestStageCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="title" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="business_process_id" validate={[]} />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="quest_id" reference="quest">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="order" validate={[]} />
          <TextInput source="description" validate={[]} />
          <TextInput source="code" validate={[]} />
      </>
    }
  />
);
