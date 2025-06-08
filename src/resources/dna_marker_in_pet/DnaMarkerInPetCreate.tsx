import { TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const DnaMarkerInPetCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="value"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="pet_id"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
