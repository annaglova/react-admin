import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const UserQuestFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const UserQuestList = () => (
  <List filters={UserQuestFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <DateField source="finish_date" label="Finish Date" />
      <TextField source="contact_id" label="Contact Id" />
      <DateField source="deadline_date" label="Deadline Date" />
      <BooleanField source="deactivated" label="Deactivated" />
      <NumberField source="reward" label="Reward" />
      <TextField source="description" label="Description" />
      <NumberField source="frequency_interval" label="Frequency Interval" />
    </Datagrid>
  </List>
);
