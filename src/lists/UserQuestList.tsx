import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const UserQuestFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const UserQuestList = () => (
  <List filters={UserQuestFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <TextField source="finish_date" />
      <ReferenceField source="contact_id" reference="contacts" />
      <TextField source="deadline_date" />
      <BooleanField source="deactivated" />
      <DateField source="reward" />
      <TextField source="description" />
      <DateField source="frequency_interval" />
    </Datagrid>
  </List>
);
