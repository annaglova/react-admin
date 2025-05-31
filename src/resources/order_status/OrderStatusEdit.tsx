import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const OrderStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="position" />
      <BooleanInput source="final_status" />
    </SimpleForm>
  </Edit>
);
