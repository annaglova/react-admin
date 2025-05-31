// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const BreedStandardShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Subsection Id" value={<ReferenceField source="subsection_id" reference="breed_subsection"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Section Id" value={<ReferenceField source="section_id" reference="breed_section"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Group Id" value={<ReferenceField source="group_id" reference="breed_group"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Code" value={<TextField source="code" />} />
        <Labeled label="Provider Id" value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Effective" value={<DateField source="effective" />} />
        <Labeled label="Approved" value={<DateField source="approved" />} />
        <Labeled label="Link" value={<TextField source="link" />} />
        <Labeled label="Working Trial" value={<BooleanField source="working_trial" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="breed_standard_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Has Variable Divisions" value={<BooleanField source="has_variable_divisions" />} />
      </>
    }
  />
);
