import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PeriodFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PeriodList = () => (
  <List filters={PeriodFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <DateField source="start_date" label="Start Date" />
      <DateField source="due_date" label="Due Date" />
      <ReferenceField source="year_id" reference="period" label="Year Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="quarter_id" reference="period" label="Quarter Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="parent_id" reference="period" label="Parent Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
