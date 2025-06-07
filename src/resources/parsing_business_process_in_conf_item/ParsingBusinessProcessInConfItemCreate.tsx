import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ParsingBusinessProcessInConfItemCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="priority" validate={[]} />
          <TextInput source="business_process_id" validate={[]} />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="is_active" validate={[]} />
          <TextInput source="provider_class_name" validate={[]} />
      </>
    }
  />
);
