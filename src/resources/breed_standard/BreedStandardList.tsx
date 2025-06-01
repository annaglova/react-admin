import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const BreedStandardFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedStandardList = () => (
  <List filters={BreedStandardFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="subsection_id" reference="breed_subsection">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="section_id" reference="breed_section">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="group_id" reference="breed_group">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="code" />
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="effective" />
      <DateField source="approved" />
      <TextField source="link" />
      <BooleanField source="working_trial" />
      <ReferenceField source="status_id" reference="breed_standard_status">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="has_variable_divisions" />
    </Datagrid>
  </List>
);
