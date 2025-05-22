import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const EventFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const EventList = () => (
  <List filters={EventFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <ReferenceField source="type_id" reference="types" />
      <ReferenceField source="owner_id" reference="owners" />
      <ReferenceField source="status_id" reference="statuses" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <DateField source="goal" />
      <ReferenceField source="territory_id" reference="territories" />
      <ReferenceField source="industry_id" reference="industries" />
      <DateField source="actual_response" />
      <DateField source="primary_budgeted_cost" />
      <DateField source="primary_expected_revenue" />
      <DateField source="primary_actual_cost" />
      <DateField source="primary_actual_revenue" />
      <DateField source="notes" />
      <TextField source="last_actualize_date" />
      <DateField source="recipient_count" />
      <ReferenceField source="organizer_id" reference="organizers" />
      <DateField source="address" />
      <ReferenceField source="city_id" reference="cities" />
      <ReferenceField source="region_id" reference="regions" />
      <ReferenceField source="country_id" reference="countries" />
      <ReferenceField source="account_id" reference="accounts" />
      <DateField source="url" />
      <ReferenceField source="pet_type_id" reference="pet_types" />
      <ReferenceField source="cover_id" reference="covers" />
    </Datagrid>
  </List>
);
