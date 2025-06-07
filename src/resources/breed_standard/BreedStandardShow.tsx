// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";



export const BreedStandardShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Subsection Id" required={false} value={<ReferenceField source="subsection_id" reference="breed_subsection"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Section Id" required={false} value={<ReferenceField source="section_id" reference="breed_section"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Group Id" required={false} value={<ReferenceField source="group_id" reference="breed_group"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Code" required={false} value={<TextField source="code" />} />
        <Labeled label="Provider Id" required={false} value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Effective" required={false} value={<DateField source="effective" />} />
        <Labeled label="Approved" required={false} value={<DateField source="approved" />} />
        <Labeled label="Link" required={false} value={<TextField source="link" />} />
        <Labeled label="Working Trial" required={false} value={<BooleanField source="working_trial" />} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="breed_standard_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Has Variable Divisions" required={false} value={<BooleanField source="has_variable_divisions" />} />
      </>
    }
  />
);
