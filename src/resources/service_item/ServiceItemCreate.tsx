import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ServiceItemCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <NumberInput source="reaction_time_value" validate={[]} />
          <TextInput source="reaction_time_unit_id" validate={[]} />
          <NumberInput source="solution_time_value" validate={[]} />
          <TextInput source="solution_time_unit_id" validate={[]} />
          <TextInput source="notes" validate={[]} />
          <TextInput source="reaction_time" validate={[]} />
          <TextInput source="solution_time" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="owner_id" validate={[]} />
          <ReferenceInput source="calendar_id" reference="calendar">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="category_id" reference="service_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="provider_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="sort_order" validate={[]} />
          <TextInput source="description" validate={[]} />
      </>
    }
  />
);
