import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const OrderDeliveryStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="position" />
    </SimpleForm>
  </Create>
);
