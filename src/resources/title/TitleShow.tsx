// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";



export const TitleShow = ({ record }: any) => (
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
        <Labeled label="Pet Type Id" required={false} value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Provider Id" required={false} value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Is Processed" required={false} value={<BooleanField source="is_processed" />} />
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
      </>
    }
  />
);
