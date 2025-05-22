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

const ConfItemFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ConfItemList = () => (
  <List filters={ConfItemFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <NumberField source="process_listeners" />
      <TextField source="name" />
      <ReferenceField source="type_id" reference="types" />
      <DateField source="serial_number" />
      <DateField source="inventory_number" />
      <ReferenceField source="status_id" reference="statuses" />
      <TextField source="purchase_date" />
      <TextField source="cancel_date" />
      <TextField source="warranty_until" />
      <ReferenceField source="owner_id" reference="owners" />
      <ReferenceField
        source="parent_conf_item_id"
        reference="parent_conf_items"
      />
      <ReferenceField source="category_id" reference="categories" />
      <DateField source="notes" />
      <ReferenceField source="country_id" reference="countries" />
      <ReferenceField source="region_id" reference="regions" />
      <ReferenceField source="city_id" reference="cities" />
      <DateField source="street" />
      <DateField source="address" />
      <ReferenceField source="provider_id" reference="providers" />
      <ReferenceField
        source="business_process_id"
        reference="business_processes"
      />
      <DateField source="priority" />
      <TextField source="conf_item_image" />
      <TextField source="description" />
      <ReferenceField source="parsing_status_id" reference="parsing_statuses" />
      <BooleanField source="need_parse" />
      <ReferenceField
        source="confidence_level_id"
        reference="confidence_levels"
      />
      <ReferenceField
        source="data_quality_level_id"
        reference="data_quality_levels"
      />
      <TextField source="prime_entity_name" />
      <DateField source="quest_reward" />
      <DateField source="url" />
      <DateField source="page_model" />
      <DateField source="quest_cycle_interval" />
      <ReferenceField source="quest_type_id" reference="quest_types" />
    </Datagrid>
  </List>
);
