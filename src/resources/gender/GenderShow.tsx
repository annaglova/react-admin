import {
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const GenderShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <TextField source="name" />
      <DateField source="description" />
    </SimpleShowLayout>
  </Show>
);
