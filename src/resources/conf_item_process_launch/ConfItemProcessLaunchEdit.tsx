import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ConfItemProcessLaunchEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes"  />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="launch_number"  />
          <NumberInput source="duration"  />
          <DateInput source="start_date"  />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="due_date"  />
          <NumberInput source="changed_record_count"  />
          <DateInput source="update_date"  />
          <BooleanInput source="reanimate"  />
          <TextInput source="parameters_value"  />
      </>
    }
  />
);
