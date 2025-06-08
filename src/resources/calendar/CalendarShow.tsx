// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const CalendarShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Parent Id" required={false} value={<ReferenceField source="parent_id" reference="calendar"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Time Zone Id" required={false} value={<ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Depth" required={false} value={<NumberField source="depth" />} />
        <Labeled label="Around Clock" required={false} value={<BooleanField source="around_clock" />} />
        <Labeled label="Without Day Off" required={false} value={<BooleanField source="without_day_off" />} />
      </>
    }
  />
);
