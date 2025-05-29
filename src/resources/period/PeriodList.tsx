import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from "react-admin";

const PeriodFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PeriodList = () => (
  <List filters={PeriodFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="start_date" />
      <DateField source="due_date" />
      <ReferenceField source="year_id" reference="period">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="quarter_id" reference="period">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="parent_id" reference="period">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
