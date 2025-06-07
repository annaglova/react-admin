import { NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ContactRatingEdit = () => (
  <ResourceEditLayout
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
