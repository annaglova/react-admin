// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, NumberField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const CurrencyShow = ({ record }: any) => (
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
        <Labeled label="Code" value={<TextField source="code" />} />
        <Labeled label="Short Name" value={<TextField source="short_name" />} />
        <Labeled label="Symbol" value={<TextField source="symbol" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Recalc Direction" value={<NumberField source="recalc_direction" />} />
        <Labeled label="Division" value={<NumberField source="division" />} />
        <Labeled label="Currecy Symbol Position" value={<NumberField source="currecy_symbol_position" />} />
        <Labeled label="Rate" value={<NumberField source="rate" />} />
      </>
    }
  />
);
