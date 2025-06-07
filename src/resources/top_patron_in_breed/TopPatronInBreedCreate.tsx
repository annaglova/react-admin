import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const TopPatronInBreedCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="contact_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="rating" validate={[]} />
          <NumberInput source="place" validate={[]} />
      </>
    }
  />
);
