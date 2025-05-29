import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const InvoicePaymentStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const InvoicePaymentStatusList = () => (
  <List filters={InvoicePaymentStatusFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="final_status" />
      <TextField source="color" />
    </Datagrid>
  </List>
);
