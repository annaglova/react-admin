import { ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ProcessParameterInConfItemEdit = () => (
  <ResourceEditLayout
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
