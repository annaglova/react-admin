import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ReferralLinkFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ReferralLinkList = () => (
  <List filters={ReferralLinkFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="contact_id" />
      <TextField source="code" />
    </Datagrid>
  </List>
);
