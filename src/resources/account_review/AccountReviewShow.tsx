// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const AccountReviewShow = ({ record }: any) => (
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
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
        <Labeled label="Order Number" required={false} value={<NumberField source="order_number" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Review" required={false} value={<TextField source="review" />} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Test" required={false} value={<TextField source="test" />} />
      </>
    }
  />
);
