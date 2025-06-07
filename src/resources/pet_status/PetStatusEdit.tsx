import { ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetStatusEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <TextInput source="code"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="pet_type_id" reference="pet_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
