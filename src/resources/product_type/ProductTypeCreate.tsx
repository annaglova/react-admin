import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ProductTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <BooleanInput source="is_service" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="category_id" reference="product_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
