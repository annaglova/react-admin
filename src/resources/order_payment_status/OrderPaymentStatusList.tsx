import { Datagrid, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const OrderPaymentStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderPaymentStatusList = () => (
  <List filters={OrderPaymentStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <NumberField source="position" label="Position" />
    </Datagrid>
  </List>
);
