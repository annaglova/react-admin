import { BooleanInput, DateInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ConfItemAddressCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="region_id" reference="region">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="city_id" reference="city">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="street"  />
          <TextInput source="address"  />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="start_date"  />
          <DateInput source="end_date"  />
          <BooleanInput source="current"  />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
