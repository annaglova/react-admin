import { BooleanInput, Edit, ReferenceInput, SelectInput, SimpleForm } from "react-admin";

export const TagAccessGranteeEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="tag_access_id" reference="tag_access">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="can_tag" />
      <BooleanInput source="can_create" />
      <BooleanInput source="can_delete" />
      <BooleanInput source="can_edit" />
      <BooleanInput source="can_read" />
    </SimpleForm>
  </Edit>
);
