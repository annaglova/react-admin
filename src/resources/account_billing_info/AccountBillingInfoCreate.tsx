import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const AccountBillingInfoCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="billing_info"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="account_manager_id" reference="contact">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="chief_accountant_id" reference="contact">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="legal_unit"  />
      </>
    }
  />
);
