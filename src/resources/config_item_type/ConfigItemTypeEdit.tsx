import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ConfigItemTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="conf_item_category_id" reference="config_item_category">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
