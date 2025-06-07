import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ProcessParameterInConfItemCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="parameter_value" validate={[]} />
          <TextInput source="parameter_name" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
