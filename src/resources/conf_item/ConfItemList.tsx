import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ConfItemFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ConfItemList = () => (
  <List filters={ConfItemFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="type_id" reference="config_item_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="serial_number" />
      <TextField source="inventory_number" />
      <ReferenceField source="status_id" reference="config_item_status">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="purchase_date" />
      <DateField source="cancel_date" />
      <DateField source="warranty_until" />
      <TextField source="owner_id" />
      <ReferenceField source="parent_conf_item_id" reference="conf_item">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="category_id" reference="config_item_category">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="notes" />
      <ReferenceField source="country_id" reference="country">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="region_id" reference="region">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="city_id" reference="city">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="street" />
      <TextField source="address" />
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="business_process_id" />
      <NumberField source="priority" />
      <TextField source="conf_item_image" />
      <TextField source="description" />
      <ReferenceField source="parsing_status_id" reference="conf_item_parsing_status">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="need_parse" />
      <ReferenceField source="confidence_level_id" reference="data_confidence_level">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="data_quality_level_id" reference="data_quality_level">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="prime_entity_name" />
      <NumberField source="quest_reward" />
      <TextField source="url" />
      <TextField source="page_model" />
      <NumberField source="quest_cycle_interval" />
      <TextField source="quest_type_id" />
    </Datagrid>
  </List>
);
