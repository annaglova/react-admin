// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const TitleInPetShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Title Id" required={false} value={<ReferenceField source="title_id" reference="title"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
        <Labeled label="Is Confirmed" required={false} value={<BooleanField source="is_confirmed" />} />
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Amount" required={false} value={<NumberField source="amount" />} />
        <Labeled label="Raw Title" required={false} value={<TextField source="raw_title" />} />
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
