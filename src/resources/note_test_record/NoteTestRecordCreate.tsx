import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const NoteTestRecordCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="pet_id" validate={[]} />
          <ReferenceInput source="note_id" reference="note">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
