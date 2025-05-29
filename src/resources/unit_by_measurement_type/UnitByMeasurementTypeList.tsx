import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const UnitByMeasurementTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const UnitByMeasurementTypeList = () => (
  <List filters={UnitByMeasurementTypeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="measurement_type_id" />
      <TextField source="unit_id" />
    </Datagrid>
  </List>
);
