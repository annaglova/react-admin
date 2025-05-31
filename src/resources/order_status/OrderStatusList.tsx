import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const OrderStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderStatusList = () => (
  <List filters={OrderStatusFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="position" />
      <BooleanField source="final_status" />
    </Datagrid>
  </List>
);
