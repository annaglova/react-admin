// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const ServiceItemShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Reaction Time Value" value={<NumberField source="reaction_time_value" />} />
        <Labeled label="Reaction Time Unit Id" value={<TextField source="reaction_time_unit_id" />} />
        <Labeled label="Solution Time Value" value={<NumberField source="solution_time_value" />} />
        <Labeled label="Solution Time Unit Id" value={<TextField source="solution_time_unit_id" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Reaction Time" value={<TextField source="reaction_time" />} />
        <Labeled label="Solution Time" value={<TextField source="solution_time" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Calendar Id" value={<ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="service_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Provider Id" value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Sort Order" value={<NumberField source="sort_order" />} />
        <Labeled label="Description" value={<TextField source="description" />} />
      </>
    }
  />
);
