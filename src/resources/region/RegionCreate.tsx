import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const RegionCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="time_zone_id" reference="time_zone">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="geo_names_time_zone_id" reference="geo_names_time_zone">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="alternate_names" validate={[]} />
          <TextInput source="geo_names_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="dem" validate={[]} />
          <NumberInput source="latitude" validate={[]} />
          <NumberInput source="longitude" validate={[]} />
          <TextInput source="code" validate={[]} />
          <TextInput source="region_admin1_code" validate={[]} />
      </>
    }
  />
);
