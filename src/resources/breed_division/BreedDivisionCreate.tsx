import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const BreedDivisionCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <BooleanInput source="division_by_color" validate={[]} />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="is_main" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="division_by_body_feature" validate={[]} />
          <BooleanInput source="division_by_size" validate={[]} />
          <BooleanInput source="division_by_coat_type" validate={[]} />
          <ReferenceInput source="breed_standard_id" reference="breed_standard">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
