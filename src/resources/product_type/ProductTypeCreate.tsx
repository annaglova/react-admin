import { BooleanInput, Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ProductTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_service" />
      <ReferenceInput source="category_id" reference="product_category">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
