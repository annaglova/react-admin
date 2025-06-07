// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";



export const ProductTypeShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Is Service" required={false} value={<BooleanField source="is_service" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Category Id" required={false} value={<ReferenceField source="category_id" reference="product_category"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
