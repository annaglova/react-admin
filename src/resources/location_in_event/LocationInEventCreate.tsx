import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const LocationInEventCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="location_type_id" reference="location_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
