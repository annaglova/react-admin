import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const HealthExamResultFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const HealthExamResultList = () => (
  <List filters={HealthExamResultFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="object_id" reference="health_exam_object" label="Object Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
