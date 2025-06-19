// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";
import { PrettyJsonField } from "@/components/PrettyJsonField";


export const PetTypeShow = ({ record }: any) => (
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
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Public Data Id" required={false} value={<ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Measurements" value={<PrettyJsonField source="measurements" label="Measurements" />} />
      </>
    }
  />
);
