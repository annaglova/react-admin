// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const CurrencyShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Code" required={true} value={<TextField source="code" />} />
        <Labeled label="Short Name" required={false} value={<TextField source="short_name" />} />
        <Labeled label="Symbol" required={true} value={<TextField source="symbol" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Recalc Direction" required={false} value={<NumberField source="recalc_direction" />} />
        <Labeled label="Division" required={false} value={<NumberField source="division" />} />
        <Labeled label="Currecy Symbol Position" required={false} value={<NumberField source="currecy_symbol_position" />} />
        <Labeled label="Rate" required={false} value={<NumberField source="rate" />} />
      </>
    }
  />
);
