import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ServicePactFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServicePactList = () => (
  <List filters={ServicePactFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="status_id" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <TextField source="owner_id" />
      <TextField source="number" />
      <TextField source="service_provider_id" />
      <TextField source="service_provider_contact_id" />
      <TextField source="notes" />
      <TextField source="calendar_id" />
      <TextField source="provider_id" />
      <TextField source="product_id" />
    </Datagrid>
  </List>
);
