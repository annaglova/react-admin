import { ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ProjectCategoryEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="event_type_id" reference="event_type">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
  />
);
