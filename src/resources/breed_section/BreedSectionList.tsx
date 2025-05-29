import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

const BreedSectionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedSectionList = () => (
  <List filters={BreedSectionFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="code" />
      <ReferenceField source="breed_group_id" reference="breed_group">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
