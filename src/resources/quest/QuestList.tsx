import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const QuestFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const QuestList = () => (
  <List filters={QuestFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="url" />
      <ReferenceField source="type_id" reference="quest_type">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="reward" />
      <NumberField source="frequency_interval" />
      <ReferenceField source="frequency_id" reference="quest_frequency">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="deactivated" />
      <TextField source="description" />
      <NumberField source="total_steps" />
      <DateField source="deadline_date" />
    </Datagrid>
  </List>
);
