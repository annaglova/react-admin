// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const ContactAddressShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Address Type Id" required={false} value={<ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" required={false} value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="City Id" required={false} value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Address" required={false} value={<TextField source="address" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Zip" required={false} value={<TextField source="zip" />} />
        <Labeled label="Primary" required={false} value={<BooleanField source="primary" />} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Full Address" required={false} value={<TextField source="full_address" />} />
      </>
    }
  />
);
