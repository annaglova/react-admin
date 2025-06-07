import { BooleanField, Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const DependencyTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const DependencyTypeList = () => (
  <List filters={DependencyTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <BooleanField source="for_service_service" label="For Service Service" />
      <BooleanField source="for_conf_item_conf_item" label="For Conf Item Conf Item" />
      <BooleanField source="for_service_conf_item" label="For Service Conf Item" />
      <TextField source="reverse_type_name" label="Reverse Type Name" />
      <ReferenceField source="dependency_category_id" reference="dependency_category" label="Dependency Category Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
