import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AchievementCategoryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);
