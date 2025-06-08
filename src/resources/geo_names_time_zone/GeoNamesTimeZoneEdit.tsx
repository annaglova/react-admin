import { NumberInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const GeoNamesTimeZoneEdit = () => (
  <ResourceEditLayout
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
