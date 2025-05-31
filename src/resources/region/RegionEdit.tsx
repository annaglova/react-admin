import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const RegionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
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
      <NumberInput source="dem" />
      <NumberInput source="latitude" />
      <NumberInput source="longitude" />
      <TextInput source="code" />
      <TextInput source="region_admin1_code" />
    </SimpleForm>
  </Edit>
);
