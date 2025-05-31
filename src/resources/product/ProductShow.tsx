// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const ProductShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Code" value={<TextField source="code" />} />
        <Labeled label="Unit Id" value={<ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Id" value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Price" value={<NumberField source="price" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="product_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Active" value={<BooleanField source="active" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Product Source Id" value={<ReferenceField source="product_source_id" reference="product_source"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Is Archive" value={<BooleanField source="is_archive" />} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="product_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Short Description" value={<TextField source="short_description" />} />
        <Labeled label="Pet Id" value={<TextField source="pet_id" />} />
        <Labeled label="Benefits" value={<TextField source="benefits" />} />
        <Labeled label="General Conditions" value={<TextField source="general_conditions" />} />
        <Labeled label="Stripe Product Id" value={<TextField source="stripe_product_id" />} />
        <Labeled label="Pet Breed Id" value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
