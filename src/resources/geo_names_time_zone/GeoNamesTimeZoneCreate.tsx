import { NumberInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const GeoNamesTimeZoneCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <NumberInput source="gmt_offset"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="country_code"  />
      </>
    }
  />
);
