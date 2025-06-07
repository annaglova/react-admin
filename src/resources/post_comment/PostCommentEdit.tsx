import { DateInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PostCommentEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="contact_id" reference="contact">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="post_id" reference="post">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="text"  />
          <DateInput source="date"  />
      </>
    }
  />
);
