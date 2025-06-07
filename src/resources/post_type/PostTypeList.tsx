import { Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const PostTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PostTypeList = () => (
  <List filters={PostTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <TextField source="template_text" label="Template Text" />
    </Datagrid>
  </List>
);
