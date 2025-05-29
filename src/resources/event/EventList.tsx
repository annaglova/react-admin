import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const EventFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const EventList = () => (
  <List filters={EventFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type_id" />
      <TextField source="owner_id" />
      <TextField source="status_id" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <TextField source="goal" />
      <TextField source="territory_id" />
      <TextField source="industry_id" />
      <TextField source="actual_response" />
      <NumberField source="primary_budgeted_cost" />
      <NumberField source="primary_expected_revenue" />
      <NumberField source="primary_actual_cost" />
      <NumberField source="primary_actual_revenue" />
      <TextField source="notes" />
      <DateField source="last_actualize_date" />
      <NumberField source="recipient_count" />
      <TextField source="organizer_id" />
      <TextField source="address" />
      <TextField source="city_id" />
      <TextField source="region_id" />
      <TextField source="country_id" />
      <TextField source="account_id" />
      <TextField source="url" />
      <TextField source="pet_type_id" />
      <TextField source="cover_id" />
    </Datagrid>
  </List>
);
