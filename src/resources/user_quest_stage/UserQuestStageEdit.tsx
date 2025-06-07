import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const UserQuestStageEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="title"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="output"  />
          <TextInput source="input"  />
          <ReferenceInput source="user_quest_id" reference="user_quest">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="finish_date"  />
          <ReferenceInput source="stage_id" reference="quest_stage">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="order"  />
          <TextInput source="description"  />
          <TextInput source="business_process_id"  />
          <TextInput source="code"  />
      </>
    }
  />
);
