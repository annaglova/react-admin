import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const AccountBillingInfoCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="billing_info" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="account_manager_id" reference="contact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="chief_accountant_id" reference="contact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="legal_unit" validate={[]} />
      </>
    }
  />
);
