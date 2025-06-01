import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const UnitByMeasurementTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const UnitByMeasurementTypeList = () => (
  <List filters={UnitByMeasurementTypeFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="measurement_type_id" reference="measurement_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="unit_id" reference="unit">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
