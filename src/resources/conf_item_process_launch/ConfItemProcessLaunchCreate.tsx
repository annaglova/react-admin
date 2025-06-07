import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ConfItemProcessLaunchCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="launch_number" validate={[]} />
          <NumberInput source="duration" validate={[]} />
          <DateInput source="start_date" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="due_date" validate={[]} />
          <NumberInput source="changed_record_count" validate={[]} />
          <DateInput source="update_date" validate={[]} />
          <BooleanInput source="reanimate" validate={[]} />
          <TextInput source="parameters_value" validate={[]} />
      </>
    }
  />
);
