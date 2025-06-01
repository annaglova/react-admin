import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const HealthExamResultFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const HealthExamResultList = () => (
  <List filters={HealthExamResultFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="object_id" reference="health_exam_object">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
