import { DateInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PeriodCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <DateInput source="start_date" validate={[]} />
          <DateInput source="due_date" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="year_id" reference="period">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="quarter_id" reference="period">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="parent_id" reference="period">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
