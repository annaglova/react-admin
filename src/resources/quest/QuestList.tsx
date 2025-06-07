import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const QuestFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const QuestList = () => (
  <List filters={QuestFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="url" label="Url" />
      <ReferenceField source="type_id" reference="quest_type" label="Type Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="reward" label="Reward" />
      <NumberField source="frequency_interval" label="Frequency Interval" />
      <ReferenceField source="frequency_id" reference="quest_frequency" label="Frequency Id">
  <TextField source="name" />
</ReferenceField>
      <BooleanField source="deactivated" label="Deactivated" />
      <TextField source="description" label="Description" />
      <NumberField source="total_steps" label="Total Steps" />
      <DateField source="deadline_date" label="Deadline Date" />
    </Datagrid>
  </List>
);
