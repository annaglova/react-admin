import { DateInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ServicePactCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="status_id" reference="service_pact_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="start_date" validate={[]} />
          <DateInput source="end_date" validate={[]} />
          <TextInput source="owner_id" validate={[]} />
          <TextInput source="number" validate={[]} />
          <ReferenceInput source="service_provider_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="service_provider_contact_id" reference="contact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="notes" validate={[]} />
          <ReferenceInput source="calendar_id" reference="calendar">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="provider_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="product_id" reference="product">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
