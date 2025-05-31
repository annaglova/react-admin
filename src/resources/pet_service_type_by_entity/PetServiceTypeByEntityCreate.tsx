import { BooleanInput, Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const PetServiceTypeByEntityCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="entity_name" />
      <ReferenceInput source="pet_service_type_id" reference="pet_service_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="transfer_to_litter" />
      <BooleanInput source="transfer_to_account" />
    </SimpleForm>
  </Create>
);
