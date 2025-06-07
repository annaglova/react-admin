import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetInProjectEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="project_id" reference="project">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_id"  />
          <NumberInput source="number"  />
          <ReferenceInput source="class_id" reference="pet_class">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="web_link"  />
          <TextInput source="result"  />
          <TextInput source="code"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="handler_id" reference="contact">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="judge_id"  />
          <ReferenceInput source="place_id" reference="place">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="qualification_id" reference="pet_qualification">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="date"  />
          <TextInput source="temp_project_name"  />
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
