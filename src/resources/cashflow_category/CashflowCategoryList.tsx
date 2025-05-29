import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const CashflowCategoryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const CashflowCategoryList = () => (
  <List filters={CashflowCategoryFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="cashflow_type_id" />
    </Datagrid>
  </List>
);
