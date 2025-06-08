import { DateInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const LicenseManagerEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id"  />
          <ReferenceInput source="product_id" reference="product">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="status_id" reference="license_manager_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="delivery_date"  />
          <DateInput source="estimated_date"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="owner_id"  />
          <ReferenceInput source="invoice_id" reference="invoice">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="type_id" reference="license_manager_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="manage_type_id" reference="license_manager_manage_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
