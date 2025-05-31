import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const AchievementCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="category_id" reference="achievement_category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="int_value" />
      <NumberInput source="position" />
    </SimpleForm>
  </Create>
);
