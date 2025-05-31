import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const PetServiceByOptionsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="status_id" reference="pet_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="sex_id" reference="sex">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="service_type_id" reference="pet_service_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
