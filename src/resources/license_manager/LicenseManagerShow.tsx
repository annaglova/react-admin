// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const LicenseManagerShow = ({ record }: any) => (
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
        <Labeled label="Product Id" required={false} value={<ReferenceField source="product_id" reference="product"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="license_manager_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Delivery Date" required={false} value={<DateField source="delivery_date" />} />
        <Labeled label="Estimated Date" required={false} value={<DateField source="estimated_date" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Invoice Id" required={false} value={<ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="license_manager_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Manage Type Id" required={false} value={<ReferenceField source="manage_type_id" reference="license_manager_manage_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
