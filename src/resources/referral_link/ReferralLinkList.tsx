import { Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const ReferralLinkFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ReferralLinkList = () => (
  <List filters={ReferralLinkFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="contact_id" label="Contact Id" />
      <TextField source="code" label="Code" />
    </Datagrid>
  </List>
);
