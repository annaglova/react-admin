import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AccountIndustryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
