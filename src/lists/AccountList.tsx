import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const AccountFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountList = () => (
  <List filters={AccountFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <TextField source="name" />
      <DateField source="description" />
      <ReferenceField source="owner_id" reference="owners" />
      <DateField source="process_listeners" />
      <ReferenceField source="ownership_id" reference="ownerships" />
      <ReferenceField
        source="primary_contact_id"
        reference="primary_contacts"
      />
      <ReferenceField source="parent_id" reference="parents" />
      <ReferenceField source="industry_id" reference="industries" />
      <TextField source="code" />
      <ReferenceField source="type_id" reference="types" />
      <DateField source="phone" />
      <DateField source="additional_phone" />
      <DateField source="fax" />
      <DateField source="web" />
      <ReferenceField source="address_type_id" reference="address_types" />
      <DateField source="address" />
      <ReferenceField source="city_id" reference="cities" />
      <ReferenceField source="region_id" reference="regions" />
      <DateField source="zip" />
      <ReferenceField source="country_id" reference="countries" />
      <ReferenceField
        source="account_category_id"
        reference="account_categories"
      />
      <DateField source="notes" />
      <TextField source="logo" />
      <DateField source="alternative_name" />
      <DateField source="gpsn" />
      <DateField source="gpse" />
      <NumberField source="completeness" />
      <DateField source="aum" />
      <TextField source="trim_code" />
      <ReferenceField source="status_id" reference="statuses" />
      <ReferenceField source="affix_type_id" reference="affix_types" />
      <ReferenceField source="federation_id" reference="federations" />
      <DateField source="about_us" />
      <DateField source="url" />
      <ReferenceField
        source="duplicate_group_id"
        reference="duplicate_groups"
      />
      <ReferenceField source="verified_stage_id" reference="verified_stages" />
      <ReferenceField source="duplicate_id" reference="duplicates" />
      <DateField source="avatar_url" />
      <BooleanField source="has_kennel_name" />
      <DateField source="rating" />
      <TextField source="since" />
      <BooleanField source="verfied" />
      <BooleanField source="verified" />
      <ReferenceField
        source="verification_status_id"
        reference="verification_statuses"
      />
      <TextField source="company_foundation_date" />
      <DateField source="rating_placement_in_breed" />
      <ReferenceField source="cover_id" reference="covers" />
      <DateField source="lead_conversion_score" />
    </Datagrid>
  </List>
);
