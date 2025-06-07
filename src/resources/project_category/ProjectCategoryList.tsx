import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ProjectCategoryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProjectCategoryList = () => (
  <List filters={ProjectCategoryFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="event_type_id" reference="event_type" label="Event Type Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
