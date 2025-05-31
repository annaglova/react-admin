import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const EventShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="type_id" reference="event_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" />
      <ReferenceField source="status_id" reference="event_status">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="start_date" />
      <DateField source="end_date" />
      <TextField source="goal" />
      <ReferenceField source="territory_id" reference="territory">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="industry_id" reference="account_industry">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="actual_response" />
      <NumberField source="primary_budgeted_cost" />
      <NumberField source="primary_expected_revenue" />
      <NumberField source="primary_actual_cost" />
      <NumberField source="primary_actual_revenue" />
      <TextField source="notes" />
      <DateField source="last_actualize_date" />
      <NumberField source="recipient_count" />
      <ReferenceField source="organizer_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="address" />
      <ReferenceField source="city_id" reference="city">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="region_id" reference="region">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="country_id" reference="country">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="url" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
