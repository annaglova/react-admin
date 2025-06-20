import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CountryCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <TextInput source="image"  />
          <TextInput source="billing_info"  />
          <ReferenceInput source="time_zone_id" reference="time_zone">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="code"  />
          <TextInput source="alternate_names"  />
          <ReferenceInput source="geo_names_time_zone_id" reference="geo_names_time_zone">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="geo_names_country_code"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="geo_names_id"  />
          <NumberInput source="dem"  />
          <NumberInput source="latitude"  />
          <NumberInput source="longitude"  />
          <TextInput source="alpha2_code"  />
          <ReferenceInput source="public_data_id" reference="public_data">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="url"  />
      </>
    }
  />
);
