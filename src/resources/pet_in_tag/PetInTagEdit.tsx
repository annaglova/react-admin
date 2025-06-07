import { ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetInTagEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="tag_id" reference="pet_tag">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="entity_id"  />
      </>
    }
  />
);
