import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const OrderDeliveryStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="position" />
    </SimpleForm>
  </Edit>
);
