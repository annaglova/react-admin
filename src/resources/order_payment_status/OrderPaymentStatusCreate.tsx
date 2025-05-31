import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const OrderPaymentStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="position" />
    </SimpleForm>
  </Create>
);
