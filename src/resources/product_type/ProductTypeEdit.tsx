import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ProductTypeEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="is_service"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="category_id" reference="product_category">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
