import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ProductCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="code"  />
          <ReferenceInput source="unit_id" reference="unit">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="price"  />
          <TextInput source="url"  />
          <ReferenceInput source="type_id" reference="product_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="active"  />
          <TextInput source="owner_id"  />
          <TextInput source="description"  />
          <ReferenceInput source="product_source_id" reference="product_source">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="notes"  />
          <BooleanInput source="is_archive"  />
          <ReferenceInput source="category_id" reference="product_category">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="short_description"  />
          <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="benefits"  />
          <TextInput source="general_conditions"  />
          <TextInput source="stripe_product_id"  />
          <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
