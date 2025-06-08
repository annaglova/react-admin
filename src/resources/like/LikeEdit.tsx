import { NumberInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const LikeEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="contact_id" reference="contact">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="like_it"  />
      </>
    }
  />
);
