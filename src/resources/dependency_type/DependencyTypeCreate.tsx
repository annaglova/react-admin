import { BooleanInput, Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const DependencyTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="for_service_service" />
      <BooleanInput source="for_conf_item_conf_item" />
      <BooleanInput source="for_service_conf_item" />
      <TextInput source="reverse_type_name" />
      <ReferenceInput source="dependency_category_id" reference="dependency_category">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
