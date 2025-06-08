import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const BreedDivisionEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="division_by_color"  />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="is_main"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="division_by_body_feature"  />
          <BooleanInput source="division_by_size"  />
          <BooleanInput source="division_by_coat_type"  />
          <ReferenceInput source="breed_standard_id" reference="breed_standard">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
