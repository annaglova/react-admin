import { BooleanInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const TagAccessGranteeCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="tag_access_id" reference="tag_access">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="can_tag"  />
          <BooleanInput source="can_create"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="can_delete"  />
          <BooleanInput source="can_edit"  />
          <BooleanInput source="can_read"  />
      </>
    }
  />
);
