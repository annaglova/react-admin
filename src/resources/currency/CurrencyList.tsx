import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CurrencyShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <TextField source="short_name" />
      <TextField source="symbol" />
      <NumberField source="recalc_direction" />
      <NumberField source="division" />
      <NumberField source="currecy_symbol_position" />
      <NumberField source="rate" />
    </SimpleShowLayout>
  </Show>
);
