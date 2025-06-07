import { Datagrid, DateField, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const CurrencyFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CurrencyList = () => (
  <List filters={CurrencyFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <TextField source="code" label="Code *" />
      <TextField source="short_name" label="Short Name" />
      <TextField source="symbol" label="Symbol *" />
      <NumberField source="recalc_direction" label="Recalc Direction" />
      <NumberField source="division" label="Division" />
      <NumberField source="currecy_symbol_position" label="Currecy Symbol Position" />
      <NumberField source="rate" label="Rate" />
    </Datagrid>
  </List>
);
