import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CityCreate = () => (
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
          <ReferenceInput source="region_id" reference="region">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="time_zone_id" reference="time_zone">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="geo_names_time_zone_id" reference="geo_names_time_zone">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="alternate_names" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="geo_names_id" validate={[]} />
          <NumberInput source="dem" validate={[]} />
          <NumberInput source="latitude" validate={[]} />
          <NumberInput source="longitude" validate={[]} />
          <NumberInput source="population" validate={[]} />
      </>
    }
  />
);
