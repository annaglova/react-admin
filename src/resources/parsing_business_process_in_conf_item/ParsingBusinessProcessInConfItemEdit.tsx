import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ParsingBusinessProcessInConfItemEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="priority"  />
          <TextInput source="business_process_id"  />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="is_active"  />
          <TextInput source="provider_class_name"  />
      </>
    }
  />
);
