import { Create, DateInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ServicePactCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="status_id" reference="service_pact_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="start_date" />
      <DateInput source="end_date" />
      <TextInput source="owner_id" />
      <TextInput source="number" />
      <ReferenceInput source="service_provider_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="service_provider_contact_id" reference="contact">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="notes" />
      <ReferenceInput source="calendar_id" reference="calendar">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="provider_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="product_id" reference="product">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
