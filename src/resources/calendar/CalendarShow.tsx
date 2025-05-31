// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const CalendarShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Parent Id" value={<ReferenceField source="parent_id" reference="calendar"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Time Zone Id" value={<ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Depth" value={<NumberField source="depth" />} />
        <Labeled label="Around Clock" value={<BooleanField source="around_clock" />} />
        <Labeled label="Without Day Off" value={<BooleanField source="without_day_off" />} />
      </>
    }
  />
);
