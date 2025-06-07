import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CountryCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <TextInput source="image" validate={[]} />
          <TextInput source="billing_info" validate={[]} />
          <ReferenceInput source="time_zone_id" reference="time_zone">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="code" validate={[]} />
          <TextInput source="alternate_names" validate={[]} />
          <ReferenceInput source="geo_names_time_zone_id" reference="geo_names_time_zone">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="geo_names_country_code" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="geo_names_id" validate={[]} />
          <NumberInput source="dem" validate={[]} />
          <NumberInput source="latitude" validate={[]} />
          <NumberInput source="longitude" validate={[]} />
          <TextInput source="alpha2_code" validate={[]} />
          <ReferenceInput source="public_data_id" reference="public_data">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="url" validate={[]} />
      </>
    }
  />
);
