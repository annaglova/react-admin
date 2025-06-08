// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const ProductUnitShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Product Id" required={false} value={<ReferenceField source="product_id" reference="product"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Unit Id" required={false} value={<ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Is Base" required={false} value={<BooleanField source="is_base" />} />
        <Labeled label="Number Of Base Units" required={false} value={<NumberField source="number_of_base_units" />} />
      </>
    }
  />
);
