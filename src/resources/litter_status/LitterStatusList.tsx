import { Datagrid, DateField, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const LitterStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const LitterStatusList = () => (
  <List filters={LitterStatusFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="order" />
    </Datagrid>
  </List>
);
