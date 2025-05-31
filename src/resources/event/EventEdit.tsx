import { DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="type_id" reference="event_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="owner_id" />
      <ReferenceInput source="status_id" reference="event_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="start_date" />
      <DateInput source="end_date" />
      <TextInput source="goal" />
      <ReferenceInput source="territory_id" reference="territory">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="industry_id" reference="account_industry">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="actual_response" />
      <NumberInput source="primary_budgeted_cost" />
      <NumberInput source="primary_expected_revenue" />
      <NumberInput source="primary_actual_cost" />
      <NumberInput source="primary_actual_revenue" />
      <TextInput source="notes" />
      <DateInput source="last_actualize_date" />
      <NumberInput source="recipient_count" />
      <ReferenceInput source="organizer_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="address" />
      <ReferenceInput source="city_id" reference="city">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="region_id" reference="region">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="country_id" reference="country">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="account_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="url" />
      <ReferenceInput source="pet_type_id" reference="pet_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="cover_id" reference="cover">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
