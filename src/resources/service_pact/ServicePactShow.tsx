// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const ServicePactShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="service_pact_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Start Date" value={<DateField source="start_date" />} />
        <Labeled label="End Date" value={<DateField source="end_date" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Number" value={<TextField source="number" />} />
        <Labeled label="Service Provider Id" value={<ReferenceField source="service_provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Service Provider Contact Id" value={<ReferenceField source="service_provider_contact_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Calendar Id" value={<ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Provider Id" value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Product Id" value={<ReferenceField source="product_id" reference="product"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
