import { NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const BreedGroupEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <NumberInput source="code"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="provider_id" reference="account">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
