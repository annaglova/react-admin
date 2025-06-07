import { TextInput ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const DnaMarkerInPetEdit = () => (
  <ResourceEditLayout
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
