import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const UnitByMeasurementTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const UnitByMeasurementTypeList = () => (
  <List filters={UnitByMeasurementTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <ReferenceField source="measurement_type_id" reference="measurement_type" label="Measurement Type Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="unit_id" reference="unit" label="Unit Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
