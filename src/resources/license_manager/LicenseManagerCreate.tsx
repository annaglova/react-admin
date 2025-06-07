import { DateInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const LicenseManagerCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id" validate={[]} />
          <ReferenceInput source="product_id" reference="product">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="status_id" reference="license_manager_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="delivery_date" validate={[]} />
          <DateInput source="estimated_date" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="owner_id" validate={[]} />
          <ReferenceInput source="invoice_id" reference="invoice">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="type_id" reference="license_manager_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="manage_type_id" reference="license_manager_manage_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
