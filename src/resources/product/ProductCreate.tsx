import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ProductCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="code" validate={[]} />
          <ReferenceInput source="unit_id" reference="unit">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="price" validate={[]} />
          <TextInput source="url" validate={[]} />
          <ReferenceInput source="type_id" reference="product_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="active" validate={[]} />
          <TextInput source="owner_id" validate={[]} />
          <TextInput source="description" validate={[]} />
          <ReferenceInput source="product_source_id" reference="product_source">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="notes" validate={[]} />
          <BooleanInput source="is_archive" validate={[]} />
          <ReferenceInput source="category_id" reference="product_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="short_description" validate={[]} />
          <TextInput source="pet_id" validate={[]} />
          <TextInput source="benefits" validate={[]} />
          <TextInput source="general_conditions" validate={[]} />
          <TextInput source="stripe_product_id" validate={[]} />
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
