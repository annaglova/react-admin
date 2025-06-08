import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CompetitionEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes"  />
          <ReferenceInput source="provider_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="parent_id" reference="competition">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="type_id" reference="competition_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="template_id" reference="competition">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="exists_qualification"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="exists_place"  />
          <BooleanInput source="exists_award"  />
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="order"  />
          <ReferenceInput source="category_id" reference="competition_category">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
