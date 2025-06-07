import { Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CityList = () => (
  <List filters={CityFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="country_id" reference="country" label="Country Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="region_id" reference="region" label="Region Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="time_zone_id" reference="time_zone" label="Time Zone Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone" label="Geo Names Time Zone Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="alternate_names" label="Alternate Names" />
      <TextField source="geo_names_id" label="Geo Names Id" />
      <NumberField source="dem" label="Dem" />
      <NumberField source="latitude" label="Latitude" />
      <NumberField source="longitude" label="Longitude" />
      <NumberField source="population" label="Population" />
    </Datagrid>
  </List>
);
