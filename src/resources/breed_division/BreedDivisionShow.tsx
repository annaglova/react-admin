// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const BreedDivisionShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Division By Color" required={false} value={<BooleanField source="division_by_color" />} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Is Main" required={false} value={<BooleanField source="is_main" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Division By Body Feature" required={false} value={<BooleanField source="division_by_body_feature" />} />
        <Labeled label="Division By Size" required={false} value={<BooleanField source="division_by_size" />} />
        <Labeled label="Division By Coat Type" required={false} value={<BooleanField source="division_by_coat_type" />} />
        <Labeled label="Breed Standard Id" required={false} value={<ReferenceField source="breed_standard_id" reference="breed_standard"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
