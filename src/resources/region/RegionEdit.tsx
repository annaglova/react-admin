import { NumberInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const RegionEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="time_zone_id" reference="time_zone">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="geo_names_time_zone_id" reference="geo_names_time_zone">
  <SelectInput optionText="name" />
</ReferenceInput>
          <TextInput source="alternate_names" />
          <TextInput source="geo_names_id" />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="dem" />
          <NumberInput source="latitude" />
          <NumberInput source="longitude" />
          <TextInput source="code" />
          <TextInput source="region_admin1_code" />
      </>
    }
  />
);
