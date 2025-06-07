// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";



export const PeriodShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Start Date" required={false} value={<DateField source="start_date" />} />
        <Labeled label="Due Date" required={false} value={<DateField source="due_date" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Year Id" required={false} value={<ReferenceField source="year_id" reference="period"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Quarter Id" required={false} value={<ReferenceField source="quarter_id" reference="period"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Parent Id" required={false} value={<ReferenceField source="parent_id" reference="period"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
