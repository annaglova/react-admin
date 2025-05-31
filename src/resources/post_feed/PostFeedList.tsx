import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PostFeedShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="pet_id" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="contact_id" reference="contact">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="litter_id" reference="litter">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="pet_breed_id" />
    </SimpleShowLayout>
  </Show>
);
