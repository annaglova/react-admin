import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const OrderPaymentStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderPaymentStatusList = () => (
  <List filters={OrderPaymentStatusFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="position" />
    </Datagrid>
  </List>
);
