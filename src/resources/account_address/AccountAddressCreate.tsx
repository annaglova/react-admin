import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const AccountAddressCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="address_type_id" reference="address_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="region_id" reference="region">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="city_id" reference="city">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="address"  />
          <TextInput source="zip"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="primary"  />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="gpsn"  />
          <TextInput source="gpse"  />
          <TextInput source="full_address"  />
      </>
    }
  />
);
