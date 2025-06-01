import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const PostTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PostTypeList = () => (
  <List filters={PostTypeFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="template_text" />
    </Datagrid>
  </List>
);
