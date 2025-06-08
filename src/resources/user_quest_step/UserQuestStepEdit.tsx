import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const UserQuestStepEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="user_quest_id" reference="user_quest">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="description"  />
          <TextInput source="intitial_provider_code"  />
          <TextInput source="provider_code"  />
          <NumberInput source="position"  />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="finish_date"  />
          <TextInput source="output"  />
          <TextInput source="input"  />
          <TextInput source="dependencies"  />
      </>
    }
  />
);
