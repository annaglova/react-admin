import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ProcessSelectorInConfItemCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <BooleanInput source="is_collection" validate={[]} />
          <TextInput source="selector" validate={[]} />
          <TextInput source="parameter_name" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="result_element_name" validate={[]} />
      </>
    }
  />
);
