import { DateInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PeriodEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <DateInput source="start_date"  />
          <DateInput source="due_date"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="year_id" reference="period">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="quarter_id" reference="period">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="parent_id" reference="period">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
