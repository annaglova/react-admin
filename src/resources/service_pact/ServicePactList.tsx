import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ServicePactShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="status_id" reference="service_pact_status">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="start_date" />
      <DateField source="end_date" />
      <TextField source="owner_id" />
      <TextField source="number" />
      <ReferenceField source="service_provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="service_provider_contact_id" reference="contact">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="notes" />
      <ReferenceField source="calendar_id" reference="calendar">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="product_id" reference="product">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
