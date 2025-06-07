import { BooleanField, Datagrid, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const OrderStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderStatusList = () => (
  <List filters={OrderStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <NumberField source="position" label="Position" />
      <BooleanField source="final_status" label="Final Status" />
    </Datagrid>
  </List>
);
