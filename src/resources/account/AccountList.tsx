import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const AccountFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountList = () => (
  <List filters={AccountFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="owner_id" />
      <ReferenceField source="ownership_id" reference="account_ownership">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="primary_contact_id" />
      <ReferenceField source="parent_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="industry_id" reference="account_industry">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="code" />
      <ReferenceField source="type_id" reference="account_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="phone" />
      <TextField source="additional_phone" />
      <TextField source="fax" />
      <TextField source="web" />
      <ReferenceField source="address_type_id" reference="address_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="address" />
      <ReferenceField source="city_id" reference="city">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="region_id" reference="region">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="zip" />
      <ReferenceField source="country_id" reference="country">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="account_category_id" reference="account_category">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="notes" />
      <TextField source="logo" />
      <TextField source="alternative_name" />
      <TextField source="gpsn" />
      <TextField source="gpse" />
      <NumberField source="completeness" />
      <TextField source="aum" />
      <TextField source="trim_code" />
      <ReferenceField source="status_id" reference="account_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="affix_type_id" reference="affix_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="federation_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="about_us" />
      <TextField source="url" />
      <TextField source="duplicate_group_id" />
      <ReferenceField source="verified_stage_id" reference="verified_stage">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="duplicate_id" />
      <TextField source="avatar_url" />
      <BooleanField source="has_kennel_name" />
      <NumberField source="rating" />
      <DateField source="since" />
      <BooleanField source="verfied" />
      <BooleanField source="verified" />
      <ReferenceField source="verification_status_id" reference="verification_status">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="company_foundation_date" />
      <NumberField source="rating_placement_in_breed" />
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="lead_conversion_score" />
    </Datagrid>
  </List>
);
