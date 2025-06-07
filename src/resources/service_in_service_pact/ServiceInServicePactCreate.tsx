import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ServiceInServicePactCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="service_item_id" reference="service_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="service_pact_id" reference="service_pact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="reaction_time_value" validate={[]} />
          <ReferenceInput source="reaction_time_unit_id" reference="time_unit">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="solution_time_value" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="solution_time_unit_id" reference="time_unit">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="calendar_id" reference="calendar">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="reaction_time" validate={[]} />
          <TextInput source="solution_time" validate={[]} />
          <TextInput source="concat_name" validate={[]} />
      </>
    }
  />
);
