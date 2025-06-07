import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ServicePactFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServicePactList = () => (
  <List filters={ServicePactFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <ReferenceField source="status_id" reference="service_pact_status" label="Status Id">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="start_date" label="Start Date" />
      <DateField source="end_date" label="End Date" />
      <TextField source="owner_id" label="Owner Id" />
      <TextField source="number" label="Number" />
      <ReferenceField source="service_provider_id" reference="account" label="Service Provider Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="service_provider_contact_id" reference="contact" label="Service Provider Contact Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="notes" label="Notes" />
      <ReferenceField source="calendar_id" reference="calendar" label="Calendar Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="provider_id" reference="account" label="Provider Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="product_id" reference="product" label="Product Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
