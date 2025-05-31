import { BooleanInput, Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const CompetitionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="notes" />
      <ReferenceInput source="provider_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="parent_id" reference="competition">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="type_id" reference="competition_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="template_id" reference="competition">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="exists_qualification" />
      <BooleanInput source="exists_place" />
      <BooleanInput source="exists_award" />
      <ReferenceInput source="pet_type_id" reference="pet_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="order" />
      <ReferenceInput source="category_id" reference="competition_category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="breed_id" reference="breed">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
