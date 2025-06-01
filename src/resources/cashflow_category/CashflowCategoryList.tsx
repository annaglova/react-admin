import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CashflowCategoryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CashflowCategoryList = () => (
  <List filters={CashflowCategoryFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="cashflow_type_id" reference="cashflow_type">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
