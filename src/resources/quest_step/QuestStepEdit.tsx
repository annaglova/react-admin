import { NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const QuestStepEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="quest_id" reference="quest">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="description"  />
          <TextInput source="intitial_provider_code"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="provider_code"  />
          <NumberInput source="position"  />
          <TextInput source="dependencies"  />
      </>
    }
  />
);
