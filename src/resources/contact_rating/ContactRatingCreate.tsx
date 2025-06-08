import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ContactRatingCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id"  />
          <NumberInput source="rating"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="rating_type_id" reference="rating_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
