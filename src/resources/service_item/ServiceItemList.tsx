import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const ServiceItemFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServiceItemList = () => (
  <List filters={ServiceItemFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="reaction_time_value" />
      <TextField source="reaction_time_unit_id" />
      <NumberField source="solution_time_value" />
      <TextField source="solution_time_unit_id" />
      <TextField source="notes" />
      <TextField source="reaction_time" />
      <TextField source="solution_time" />
      <TextField source="owner_id" />
      <TextField source="calendar_id" />
      <TextField source="category_id" />
      <TextField source="provider_id" />
      <NumberField source="sort_order" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
