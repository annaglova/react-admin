// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const CompetitionShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Provider Id" value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Parent Id" value={<ReferenceField source="parent_id" reference="competition"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="competition_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Template Id" value={<ReferenceField source="template_id" reference="competition"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Exists Qualification" value={<BooleanField source="exists_qualification" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Exists Place" value={<BooleanField source="exists_place" />} />
        <Labeled label="Exists Award" value={<BooleanField source="exists_award" />} />
        <Labeled label="Pet Type Id" value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Order" value={<NumberField source="order" />} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="competition_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
