import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ConfItemFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ConfItemList = () => (
  <List filters={ConfItemFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <ReferenceField source="type_id" reference="config_item_type" label="Type Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="serial_number" label="Serial Number" />
      <TextField source="inventory_number" label="Inventory Number" />
      <ReferenceField source="status_id" reference="config_item_status" label="Status Id">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="purchase_date" label="Purchase Date" />
      <DateField source="cancel_date" label="Cancel Date" />
      <DateField source="warranty_until" label="Warranty Until" />
      <TextField source="owner_id" label="Owner Id" />
      <ReferenceField source="parent_conf_item_id" reference="conf_item" label="Parent Conf Item Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="category_id" reference="config_item_category" label="Category Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="notes" label="Notes" />
      <ReferenceField source="country_id" reference="country" label="Country Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="region_id" reference="region" label="Region Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="city_id" reference="city" label="City Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="street" label="Street" />
      <TextField source="address" label="Address" />
      <ReferenceField source="provider_id" reference="account" label="Provider Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="business_process_id" label="Business Process Id" />
      <NumberField source="priority" label="Priority" />
      <TextField source="conf_item_image" label="Conf Item Image" />
      <TextField source="description" label="Description" />
      <ReferenceField source="parsing_status_id" reference="conf_item_parsing_status" label="Parsing Status Id">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="need_parse" label="Need Parse" />
      <ReferenceField source="confidence_level_id" reference="data_confidence_level" label="Confidence Level Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="data_quality_level_id" reference="data_quality_level" label="Data Quality Level Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="prime_entity_name" label="Prime Entity Name" />
      <NumberField source="quest_reward" label="Quest Reward" />
      <TextField source="url" label="Url" />
      <TextField source="page_model" label="Page Model" />
      <NumberField source="quest_cycle_interval" label="Quest Cycle Interval" />
      <TextField source="quest_type_id" label="Quest Type Id" />
    </Datagrid>
  </List>
);
