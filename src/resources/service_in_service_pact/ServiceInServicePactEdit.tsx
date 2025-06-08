import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ServiceInServicePactEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="service_item_id" reference="service_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="service_pact_id" reference="service_pact">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="reaction_time_value"  />
          <ReferenceInput source="reaction_time_unit_id" reference="time_unit">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="solution_time_value"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="solution_time_unit_id" reference="time_unit">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="calendar_id" reference="calendar">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="reaction_time"  />
          <TextInput source="solution_time"  />
          <TextInput source="concat_name"  />
      </>
    }
  />
);
