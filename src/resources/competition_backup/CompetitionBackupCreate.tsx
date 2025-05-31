import { BooleanInput, Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const CompetitionBackupCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="exists_award" />
      <BooleanInput source="exists_place" />
      <BooleanInput source="exists_qualification" />
      <ReferenceInput source="pet_type_id" reference="pet_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="provider_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="type_id" reference="competition_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
