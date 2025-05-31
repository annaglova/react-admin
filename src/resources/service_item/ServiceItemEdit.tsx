import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ServiceItemEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="reaction_time_value" />
      <TextInput source="reaction_time_unit_id" />
      <NumberInput source="solution_time_value" />
      <TextInput source="solution_time_unit_id" />
      <TextInput source="notes" />
      <TextInput source="reaction_time" />
      <TextInput source="solution_time" />
      <TextInput source="owner_id" />
      <ReferenceInput source="calendar_id" reference="calendar">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="category_id" reference="service_category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="provider_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="sort_order" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
