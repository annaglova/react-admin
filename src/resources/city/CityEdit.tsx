import { NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CityEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <ReferenceInput source="country_id" reference="country">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="region_id" reference="region">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="time_zone_id" reference="time_zone">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="geo_names_time_zone_id" reference="geo_names_time_zone">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="alternate_names"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="geo_names_id"  />
          <NumberInput source="dem"  />
          <NumberInput source="latitude"  />
          <NumberInput source="longitude"  />
          <NumberInput source="population"  />
      </>
    }
  />
);
