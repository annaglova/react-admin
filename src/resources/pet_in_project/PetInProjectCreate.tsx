import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetInProjectCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="pet_id" validate={[]} />
          <NumberInput source="number" validate={[]} />
          <ReferenceInput source="class_id" reference="pet_class">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="web_link" validate={[]} />
          <TextInput source="result" validate={[]} />
          <TextInput source="code" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="handler_id" reference="contact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="judge_id" validate={[]} />
          <ReferenceInput source="place_id" reference="place">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="qualification_id" reference="pet_qualification">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="date" validate={[]} />
          <TextInput source="temp_project_name" validate={[]} />
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
