import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ProcessSelectorInConfItemCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <BooleanInput source="is_collection"  />
          <TextInput source="selector"  />
          <TextInput source="parameter_name"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="result_element_name"  />
      </>
    }
  />
);
