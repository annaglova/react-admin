import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const TitleEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <ReferenceInput source="pet_type_id" reference="pet_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="provider_id" reference="account">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="is_processed"  />
          <NumberInput source="rating"  />
      </>
    }
  />
);
