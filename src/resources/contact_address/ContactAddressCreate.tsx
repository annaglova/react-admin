import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ContactAddressCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="address_type_id" reference="address_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="region_id" reference="region">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="city_id" reference="city">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="address" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="zip" validate={[]} />
          <BooleanInput source="primary" validate={[]} />
          <TextInput source="contact_id" validate={[]} />
          <TextInput source="full_address" validate={[]} />
      </>
    }
  />
);
