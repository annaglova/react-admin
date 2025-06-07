import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ConfigItemTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ConfigItemTypeList = () => (
  <List filters={ConfigItemTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <ReferenceField source="conf_item_category_id" reference="config_item_category" label="Conf Item Category Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
