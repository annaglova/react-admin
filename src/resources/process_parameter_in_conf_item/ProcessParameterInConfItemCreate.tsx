import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ProcessParameterInConfItemCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="parameter_value"  />
          <TextInput source="parameter_name"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
