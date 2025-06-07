import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const BreedStandardFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedStandardList = () => (
  <List filters={BreedStandardFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <ReferenceField source="subsection_id" reference="breed_subsection" label="Subsection Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="section_id" reference="breed_section" label="Section Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="group_id" reference="breed_group" label="Group Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="code" label="Code" />
      <ReferenceField source="provider_id" reference="account" label="Provider Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="effective" label="Effective" />
      <DateField source="approved" label="Approved" />
      <TextField source="link" label="Link" />
      <BooleanField source="working_trial" label="Working Trial" />
      <ReferenceField source="status_id" reference="breed_standard_status" label="Status Id">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="has_variable_divisions" label="Has Variable Divisions" />
      <TextField source="name" label="Name" />
    </Datagrid>
  </List>
);
