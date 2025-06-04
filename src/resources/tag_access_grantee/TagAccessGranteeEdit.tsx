import { BooleanInput, ReferenceInput, SelectInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const TagAccessGranteeEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="tag_access_id" reference="tag_access">
  <SelectInput optionText="name" />
</ReferenceInput>
          <BooleanInput source="can_tag" />
          <BooleanInput source="can_create" />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="can_delete" />
          <BooleanInput source="can_edit" />
          <BooleanInput source="can_read" />
      </>
    }
  />
);
