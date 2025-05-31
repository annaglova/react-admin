import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const OrderDeliveryStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderDeliveryStatusList = () => (
  <List filters={OrderDeliveryStatusFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="position" />
    </Datagrid>
  </List>
);
