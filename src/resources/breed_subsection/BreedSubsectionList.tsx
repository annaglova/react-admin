import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

const BreedSubsectionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedSubsectionList = () => (
  <List filters={BreedSubsectionFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="breed_section_id" reference="breed_section">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_group_id" reference="breed_group">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="code" />
    </Datagrid>
  </List>
);
