import { ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PostFeedEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="pet_id"  />
          <ReferenceInput source="account_id" reference="account">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="contact_id" reference="contact">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="litter_id" reference="litter">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
