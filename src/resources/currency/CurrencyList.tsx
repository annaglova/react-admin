import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const CurrencyFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CurrencyList = () => (
  <List filters={CurrencyFilters}>
    <Datagrid rowClick="show">
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
    </Datagrid>
  </List>
);
