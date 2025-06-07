// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const ContactCommunicationShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Number" required={false} value={<TextField source="number" />} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Position" required={false} value={<NumberField source="position" />} />
        <Labeled label="Social Media Id" required={false} value={<TextField source="social_media_id" />} />
        <Labeled label="Search Number" required={false} value={<TextField source="search_number" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Is Created By Synchronization" required={false} value={<BooleanField source="is_created_by_synchronization" />} />
        <Labeled label="External Communication Type" required={false} value={<TextField source="external_communication_type" />} />
        <Labeled label="Non Actual" required={false} value={<BooleanField source="non_actual" />} />
        <Labeled label="Date Set Non Actual" required={false} value={<DateField source="date_set_non_actual" />} />
        <Labeled label="Primary" required={false} value={<BooleanField source="primary" />} />
      </>
    }
  />
);
