import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ConfItemComparisonResultCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="delta" validate={[]} />
          <TextInput source="contact_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="conf_item_minus_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="conf_item_plus_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
