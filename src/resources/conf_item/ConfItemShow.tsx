// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const ConfItemShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="config_item_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Serial Number" value={<TextField source="serial_number" />} />
        <Labeled label="Inventory Number" value={<TextField source="inventory_number" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="config_item_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Purchase Date" value={<DateField source="purchase_date" />} />
        <Labeled label="Cancel Date" value={<DateField source="cancel_date" />} />
        <Labeled label="Warranty Until" value={<DateField source="warranty_until" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Parent Conf Item Id" value={<ReferenceField source="parent_conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="config_item_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Country Id" value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="City Id" value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Street" value={<TextField source="street" />} />
        <Labeled label="Address" value={<TextField source="address" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Provider Id" value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Business Process Id" value={<TextField source="business_process_id" />} />
        <Labeled label="Priority" value={<NumberField source="priority" />} />
        <Labeled label="Conf Item Image" value={<TextField source="conf_item_image" />} />
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Parsing Status Id" value={<ReferenceField source="parsing_status_id" reference="conf_item_parsing_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Need Parse" value={<BooleanField source="need_parse" />} />
        <Labeled label="Confidence Level Id" value={<ReferenceField source="confidence_level_id" reference="data_confidence_level"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Data Quality Level Id" value={<ReferenceField source="data_quality_level_id" reference="data_quality_level"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Prime Entity Name" value={<TextField source="prime_entity_name" />} />
        <Labeled label="Quest Reward" value={<NumberField source="quest_reward" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Page Model" value={<TextField source="page_model" />} />
        <Labeled label="Quest Cycle Interval" value={<NumberField source="quest_cycle_interval" />} />
        <Labeled label="Quest Type Id" value={<TextField source="quest_type_id" />} />
      </>
    }
  />
);
