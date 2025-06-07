import { ReferenceInput, SelectInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const QuestInTagEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="entity_id" reference="quest">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        
      </>
    }
  />
);
