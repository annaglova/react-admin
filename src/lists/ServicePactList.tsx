import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const ServicePactFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServicePactList = () => (
  <List filters={ServicePactFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <ReferenceField source="status_id" reference="statuses" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <ReferenceField source="owner_id" reference="owners" />
      <TextField source="number" />
      <ReferenceField
        source="service_provider_id"
        reference="service_providers"
      />
      <ReferenceField
        source="service_provider_contact_id"
        reference="service_provider_contacts"
      />
      <DateField source="notes" />
      <ReferenceField source="calendar_id" reference="calendars" />
      <ReferenceField source="provider_id" reference="providers" />
      <ReferenceField source="product_id" reference="products" />
    </Datagrid>
  </List>
);
