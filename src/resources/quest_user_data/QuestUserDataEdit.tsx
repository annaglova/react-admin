import { DateInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const QuestUserDataEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="quest_status_id" reference="quest_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="current_stage_id" reference="quest_stage">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="contact_id" reference="contact">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="data"  />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="due_date"  />
      </>
    }
  />
);
