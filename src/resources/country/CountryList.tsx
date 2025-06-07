import { Datagrid, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CountryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CountryList = () => (
  <List filters={CountryFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <TextField source="image" label="Image" />
      <TextField source="billing_info" label="Billing Info" />
      <ReferenceField source="time_zone_id" reference="time_zone" label="Time Zone Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="code" label="Code" />
      <TextField source="alternate_names" label="Alternate Names" />
      <ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone" label="Geo Names Time Zone Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="geo_names_country_code" label="Geo Names Country Code" />
      <TextField source="geo_names_id" label="Geo Names Id" />
      <NumberField source="dem" label="Dem" />
      <NumberField source="latitude" label="Latitude" />
      <NumberField source="longitude" label="Longitude" />
      <TextField source="alpha2_code" label="Alpha2 Code" />
      <ReferenceField source="public_data_id" reference="public_data" label="Public Data Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="url" label="Url" />
    </Datagrid>
  </List>
);
