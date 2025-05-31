import { BooleanInput, Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const OrderStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="position" />
      <BooleanInput source="final_status" />
    </SimpleForm>
  </Create>
);
