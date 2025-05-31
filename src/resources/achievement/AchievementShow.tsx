import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AchievementShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="category_id" reference="achievement_category">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="int_value" />
      <NumberField source="position" />
    </SimpleShowLayout>
  </Show>
);
