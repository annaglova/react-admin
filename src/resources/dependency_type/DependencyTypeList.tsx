import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const DependencyTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const DependencyTypeList = () => (
  <List filters={DependencyTypeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="for_service_service" />
      <BooleanField source="for_conf_item_conf_item" />
      <BooleanField source="for_service_conf_item" />
      <TextField source="reverse_type_name" />
      <TextField source="dependency_category_id" />
    </Datagrid>
  </List>
);
