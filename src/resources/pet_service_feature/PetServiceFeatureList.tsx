import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const PetServiceFeatureFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetServiceFeatureList = () => (
  <List filters={PetServiceFeatureFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
