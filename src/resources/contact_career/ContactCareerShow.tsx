// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const ContactCareerShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Department Id" required={false} value={<ReferenceField source="department_id" reference="department"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Job Id" required={false} value={<ReferenceField source="job_id" reference="job"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Job Title" required={false} value={<TextField source="job_title" />} />
        <Labeled label="Primary" required={false} value={<BooleanField source="primary" />} />
        <Labeled label="Current" required={false} value={<BooleanField source="current" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Start Date" required={false} value={<DateField source="start_date" />} />
        <Labeled label="Due Date" required={false} value={<DateField source="due_date" />} />
        <Labeled label="Job Change Reason Id" required={false} value={<ReferenceField source="job_change_reason_id" reference="job_change_reason"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Decision Role Id" required={false} value={<ReferenceField source="decision_role_id" reference="contact_decision_role"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
      </>
    }
  />
);
