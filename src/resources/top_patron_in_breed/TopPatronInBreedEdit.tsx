import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const TopPatronInBreedEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="contact_id"  />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="rating"  />
          <NumberInput source="place"  />
      </>
    }
  />
);
