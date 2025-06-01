import { Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const RegionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RegionList = () => (
  <List filters={RegionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="country_id" reference="country">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="time_zone_id" reference="time_zone">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="alternate_names" />
      <TextField source="geo_names_id" />
      <NumberField source="dem" />
      <NumberField source="latitude" />
      <NumberField source="longitude" />
      <TextField source="code" />
      <TextField source="region_admin1_code" />
    </Datagrid>
  </List>
);
