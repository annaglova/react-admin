import { BooleanInput, Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const CalendarCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="parent_id" reference="calendar">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="time_zone_id" reference="time_zone">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="depth" />
      <BooleanInput source="around_clock" />
      <BooleanInput source="without_day_off" />
    </SimpleForm>
  </Create>
);
