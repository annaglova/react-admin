import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const ConfItemFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const ConfItemList = () => (
  <List filters={ConfItemFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type_id" />
      <TextField source="serial_number" />
      <TextField source="inventory_number" />
      <TextField source="status_id" />
      <DateField source="purchase_date" />
      <DateField source="cancel_date" />
      <DateField source="warranty_until" />
      <TextField source="owner_id" />
      <TextField source="parent_conf_item_id" />
      <TextField source="category_id" />
      <TextField source="notes" />
      <TextField source="country_id" />
      <TextField source="region_id" />
      <TextField source="city_id" />
      <TextField source="street" />
      <TextField source="address" />
      <TextField source="provider_id" />
      <TextField source="business_process_id" />
      <NumberField source="priority" />
      <TextField source="conf_item_image" />
      <TextField source="description" />
      <TextField source="parsing_status_id" />
      <BooleanField source="need_parse" />
      <TextField source="confidence_level_id" />
      <TextField source="data_quality_level_id" />
      <TextField source="prime_entity_name" />
      <NumberField source="quest_reward" />
      <TextField source="url" />
      <TextField source="page_model" />
      <NumberField source="quest_cycle_interval" />
      <TextField source="quest_type_id" />
    </Datagrid>
  </List>
);
