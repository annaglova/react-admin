import { DateInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ServicePactCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="status_id" reference="service_pact_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="start_date"  />
          <DateInput source="end_date"  />
          <TextInput source="owner_id"  />
          <TextInput source="number"  />
          <ReferenceInput source="service_provider_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="service_provider_contact_id" reference="contact">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="notes"  />
          <ReferenceInput source="calendar_id" reference="calendar">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="provider_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="product_id" reference="product">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
