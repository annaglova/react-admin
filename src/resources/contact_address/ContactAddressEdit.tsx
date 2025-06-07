import { BooleanInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ContactAddressEdit = () => (
  <ResourceEditLayout
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
      </>
    }
    fieldsRight={
      <>
        <TextInput source="zip"  />
          <BooleanInput source="primary"  />
          <TextInput source="contact_id"  />
          <TextInput source="full_address"  />
      </>
    }
  />
);
