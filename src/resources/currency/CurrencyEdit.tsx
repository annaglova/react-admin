import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const CurrencyEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <TextInput source="short_name" />
      <TextInput source="symbol" />
      <NumberInput source="recalc_direction" />
      <NumberInput source="division" />
      <NumberInput source="currecy_symbol_position" />
      <NumberInput source="rate" />
    </SimpleForm>
  </Edit>
);
