import { DateInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PeriodCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <DateInput source="start_date" />
          <DateInput source="due_date" />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="year_id" reference="period">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="quarter_id" reference="period">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="parent_id" reference="period">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
  />
);
