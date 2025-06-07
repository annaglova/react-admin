import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const EventCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="type_id" reference="event_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="owner_id" validate={[]} />
          <ReferenceInput source="status_id" reference="event_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="start_date" validate={[]} />
          <DateInput source="end_date" validate={[]} />
          <TextInput source="goal" validate={[]} />
          <ReferenceInput source="territory_id" reference="territory">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="industry_id" reference="account_industry">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="actual_response" validate={[]} />
          <NumberInput source="primary_budgeted_cost" validate={[]} />
          <NumberInput source="primary_expected_revenue" validate={[]} />
          <NumberInput source="primary_actual_cost" validate={[]} />
          <NumberInput source="primary_actual_revenue" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="notes" validate={[]} />
          <DateInput source="last_actualize_date" validate={[]} />
          <NumberInput source="recipient_count" validate={[]} />
          <ReferenceInput source="organizer_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="address" validate={[]} />
          <ReferenceInput source="city_id" reference="city">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="region_id" reference="region">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="url" validate={[]} />
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
