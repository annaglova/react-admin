import { Datagrid, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const BreedSubsectionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedSubsectionList = () => (
  <List filters={BreedSubsectionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="breed_section_id" reference="breed_section" label="Breed Section Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_group_id" reference="breed_group" label="Breed Group Id">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="code" label="Code" />
    </Datagrid>
  </List>
);
