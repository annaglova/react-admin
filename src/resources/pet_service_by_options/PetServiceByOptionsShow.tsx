import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PetServiceByOptionsShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="status_id" reference="pet_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="sex_id" reference="sex">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="service_type_id" reference="pet_service_type">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
