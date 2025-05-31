import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

// @MANUAL

const BreedFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedList = () => (
  <List filters={BreedFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="admin_name" />
      <TextField source="url" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
