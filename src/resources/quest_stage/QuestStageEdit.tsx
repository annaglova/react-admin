import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const QuestStageEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="title"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="business_process_id"  />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="quest_id" reference="quest">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="order"  />
          <TextInput source="description"  />
          <TextInput source="code"  />
      </>
    }
  />
);
