import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ReferrerTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ReferrerTypeList = () => (
  <List filters={ReferrerTypeFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="matomo_code" />
    </Datagrid>
  </List>
);
