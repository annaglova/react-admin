import { Datagrid, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const RegionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RegionList = () => (
  <List filters={RegionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="country_id" reference="country" label="Country Id">
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
      <TextField source="code" label="Code" />
      <TextField source="region_admin1_code" label="Region Admin1 Code" />
    </Datagrid>
  </List>
);
