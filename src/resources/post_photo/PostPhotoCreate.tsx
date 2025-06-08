import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PostPhotoCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="position"  />
          <TextInput source="link"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="post_id" reference="post">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
