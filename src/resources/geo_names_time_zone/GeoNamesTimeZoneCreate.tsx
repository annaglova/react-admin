import { NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const GeoNamesTimeZoneCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <NumberInput source="gmt_offset" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="country_code" validate={[]} />
      </>
    }
  />
);
