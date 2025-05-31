import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PetServiceTypeByEntityShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="entity_name" />
      <ReferenceField source="pet_service_type_id" reference="pet_service_type">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="transfer_to_litter" />
      <BooleanField source="transfer_to_account" />
    </SimpleShowLayout>
  </Show>
);
