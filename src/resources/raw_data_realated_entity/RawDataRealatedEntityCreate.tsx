import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const RawDataRealatedEntityCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="priority" />
    </SimpleForm>
  </Create>
);
