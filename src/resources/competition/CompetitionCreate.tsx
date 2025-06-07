import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CompetitionCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <ReferenceInput source="provider_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="parent_id" reference="competition">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="type_id" reference="competition_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="template_id" reference="competition">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="exists_qualification" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="exists_place" validate={[]} />
          <BooleanInput source="exists_award" validate={[]} />
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="order" validate={[]} />
          <ReferenceInput source="category_id" reference="competition_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
