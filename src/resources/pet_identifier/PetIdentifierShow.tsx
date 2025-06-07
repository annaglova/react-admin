// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const PetIdentifierShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Value" required={false} value={<TextField source="value" />} />
        <Labeled label="Pet Identifier Type Id" required={false} value={<ReferenceField source="pet_identifier_type_id" reference="pet_identifier_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Studbook Id" required={false} value={<ReferenceField source="studbook_id" reference="studbook"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Number" required={false} value={<TextField source="number" />} />
        <Labeled label="Is Processed" required={false} value={<BooleanField source="is_processed" />} />
        <Labeled label="Trim Value" required={false} value={<TextField source="trim_value" />} />
        <Labeled label="Is Public" required={false} value={<BooleanField source="is_public" />} />
      </>
    }
  />
);
