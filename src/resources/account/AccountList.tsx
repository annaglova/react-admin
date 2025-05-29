import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const AccountFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountList = () => (
  <List filters={AccountFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="owner_id" />
      <TextField source="ownership_id" />
      <TextField source="primary_contact_id" />
      <TextField source="parent_id" />
      <TextField source="industry_id" />
      <TextField source="code" />
      <TextField source="type_id" />
      <TextField source="phone" />
      <TextField source="additional_phone" />
      <TextField source="fax" />
      <TextField source="web" />
      <TextField source="address_type_id" />
      <TextField source="address" />
      <TextField source="city_id" />
      <TextField source="region_id" />
      <TextField source="zip" />
      <TextField source="country_id" />
      <TextField source="account_category_id" />
      <TextField source="notes" />
      <TextField source="logo" />
      <TextField source="alternative_name" />
      <TextField source="gpsn" />
      <TextField source="gpse" />
      <NumberField source="completeness" />
      <TextField source="aum" />
      <TextField source="trim_code" />
      <TextField source="status_id" />
      <TextField source="affix_type_id" />
      <TextField source="federation_id" />
      <TextField source="about_us" />
      <TextField source="url" />
      <TextField source="duplicate_group_id" />
      <TextField source="verified_stage_id" />
      <TextField source="duplicate_id" />
      <TextField source="avatar_url" />
      <BooleanField source="has_kennel_name" />
      <NumberField source="rating" />
      <DateField source="since" />
      <BooleanField source="verfied" />
      <BooleanField source="verified" />
      <TextField source="verification_status_id" />
      <DateField source="company_foundation_date" />
      <NumberField source="rating_placement_in_breed" />
      <TextField source="cover_id" />
      <NumberField source="lead_conversion_score" />
    </Datagrid>
  </List>
);
