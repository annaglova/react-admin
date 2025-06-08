// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const BreedForecastShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Period Id" required={false} value={<ReferenceField source="period_id" reference="period"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Amount" required={false} value={<NumberField source="amount" />} />
        <Labeled label="Primary Amount" required={false} value={<NumberField source="primary_amount" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Currency Id" required={false} value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Value" required={false} value={<NumberField source="value" />} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
