import { DateInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const QuestUserDataCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="quest_status_id" reference="quest_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="current_stage_id" reference="quest_stage">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="contact_id" reference="contact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="data" validate={[]} />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="due_date" validate={[]} />
      </>
    }
  />
);
