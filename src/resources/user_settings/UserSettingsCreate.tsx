import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const UserSettingsCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id"  />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="page_view_id" reference="page_view">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="size_unit_id" reference="unit">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="weight_unit_id" reference="unit">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="anonymous_gift_sender"  />
          <BooleanInput source="welcome_stage_complete"  />
      </>
    }
  />
);
