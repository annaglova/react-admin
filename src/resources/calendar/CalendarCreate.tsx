import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CalendarCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <ReferenceInput source="parent_id" reference="calendar">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="time_zone_id" reference="time_zone">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="depth" validate={[]} />
          <BooleanInput source="around_clock" validate={[]} />
          <BooleanInput source="without_day_off" validate={[]} />
      </>
    }
  />
);
