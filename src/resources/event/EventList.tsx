import { Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const EventFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const EventList = () => (
  <List filters={EventFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name" />
      <ReferenceField source="type_id" reference="event_type" label="Type Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="owner_id" label="Owner Id" />
      <ReferenceField source="status_id" reference="event_status" label="Status Id">
  <TextField source="name" />
</ReferenceField>
      <DateField source="start_date" label="Start Date" />
      <DateField source="end_date" label="End Date" />
      <TextField source="goal" label="Goal" />
      <ReferenceField source="territory_id" reference="territory" label="Territory Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="industry_id" reference="account_industry" label="Industry Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="actual_response" label="Actual Response" />
      <NumberField source="primary_budgeted_cost" label="Primary Budgeted Cost" />
      <NumberField source="primary_expected_revenue" label="Primary Expected Revenue" />
      <NumberField source="primary_actual_cost" label="Primary Actual Cost" />
      <NumberField source="primary_actual_revenue" label="Primary Actual Revenue" />
      <TextField source="notes" label="Notes" />
      <DateField source="last_actualize_date" label="Last Actualize Date" />
      <NumberField source="recipient_count" label="Recipient Count" />
      <ReferenceField source="organizer_id" reference="account" label="Organizer Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="address" label="Address" />
      <ReferenceField source="city_id" reference="city" label="City Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="region_id" reference="region" label="Region Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="country_id" reference="country" label="Country Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="account_id" reference="account" label="Account Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="url" label="Url" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="cover_id" reference="cover" label="Cover Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
