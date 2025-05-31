import { DateInput, Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const PeriodEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <DateInput source="start_date" />
      <DateInput source="due_date" />
      <ReferenceInput source="year_id" reference="period">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="quarter_id" reference="period">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="parent_id" reference="period">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
