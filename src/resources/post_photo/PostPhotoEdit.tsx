import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PostPhotoEdit = () => (
  <ResourceEditLayout
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
