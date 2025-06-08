// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const AccountBillingInfoShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Billing Info" required={false} value={<TextField source="billing_info" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Account Manager Id" required={false} value={<ReferenceField source="account_manager_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Chief Accountant Id" required={false} value={<ReferenceField source="chief_accountant_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Legal Unit" required={false} value={<TextField source="legal_unit" />} />
      </>
    }
  />
);
