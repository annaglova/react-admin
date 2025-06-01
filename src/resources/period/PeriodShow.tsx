// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const PeriodShow = ({ record }: any) => (
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
        <Labeled label="Start Date" value={<DateField source="start_date" />} />
        <Labeled label="Due Date" value={<DateField source="due_date" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Year Id" value={<ReferenceField source="year_id" reference="period"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Quarter Id" value={<ReferenceField source="quarter_id" reference="period"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Parent Id" value={<ReferenceField source="parent_id" reference="period"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
