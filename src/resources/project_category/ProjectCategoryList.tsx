import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const ProjectCategoryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProjectCategoryList = () => (
  <List filters={ProjectCategoryFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="event_type_id" reference="event_type">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
