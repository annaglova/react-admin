import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CalendarEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <ReferenceInput source="parent_id" reference="calendar">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="time_zone_id" reference="time_zone">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="depth"  />
          <BooleanInput source="around_clock"  />
          <BooleanInput source="without_day_off"  />
      </>
    }
  />
);
