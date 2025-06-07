import { BooleanInput, ReferenceInput, SelectInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const TagAccessGranteeCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="tag_access_id" reference="tag_access">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="can_tag" validate={[]} />
          <BooleanInput source="can_create" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="can_delete" validate={[]} />
          <BooleanInput source="can_edit" validate={[]} />
          <BooleanInput source="can_read" validate={[]} />
      </>
    }
  />
);
