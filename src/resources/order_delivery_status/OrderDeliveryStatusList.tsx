import { Datagrid, DateField, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const OrderDeliveryStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderDeliveryStatusList = () => (
  <List filters={OrderDeliveryStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <NumberField source="position" label="Position" />
    </Datagrid>
  </List>
);
