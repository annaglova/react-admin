// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const OrderStatusShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Position" value={<NumberField source="position" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Final Status" value={<BooleanField source="final_status" />} />
      </>
    }
  />
);
