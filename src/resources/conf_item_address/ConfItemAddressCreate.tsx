import { BooleanInput, DateInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ConfItemAddressCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="region_id" reference="region">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="city_id" reference="city">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="street" validate={[]} />
          <TextInput source="address" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="start_date" validate={[]} />
          <DateInput source="end_date" validate={[]} />
          <BooleanInput source="current" validate={[]} />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
