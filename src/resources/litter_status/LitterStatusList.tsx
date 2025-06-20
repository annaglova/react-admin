import { Datagrid, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const LitterStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const LitterStatusList = () => (
  <List filters={LitterStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <NumberField source="order" label="Order" />
    </Datagrid>
  </List>
);
