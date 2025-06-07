import { ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ContactInPetEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="contact_role_id" reference="contact_role_for_pet">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_id"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="contact_id"  />
      </>
    }
  />
);
