import { NumberInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const GeoNamesTimeZoneCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <NumberInput source="gmt_offset" />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="country_code" />
      </>
    }
  />
);
