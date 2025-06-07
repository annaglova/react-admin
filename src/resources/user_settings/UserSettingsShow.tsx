// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const UserSettingsShow = ({ record }: any) => (
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
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Page View Id" required={false} value={<ReferenceField source="page_view_id" reference="page_view"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Size Unit Id" required={false} value={<ReferenceField source="size_unit_id" reference="unit"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Weight Unit Id" required={false} value={<ReferenceField source="weight_unit_id" reference="unit"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Anonymous Gift Sender" required={false} value={<BooleanField source="anonymous_gift_sender" />} />
        <Labeled label="Welcome Stage Complete" required={false} value={<BooleanField source="welcome_stage_complete" />} />
      </>
    }
  />
);
