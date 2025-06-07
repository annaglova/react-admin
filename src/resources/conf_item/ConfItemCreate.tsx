import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ConfItemCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="type_id" reference="config_item_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="serial_number" validate={[]} />
          <TextInput source="inventory_number" validate={[]} />
          <ReferenceInput source="status_id" reference="config_item_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="purchase_date" validate={[]} />
          <DateInput source="cancel_date" validate={[]} />
          <DateInput source="warranty_until" validate={[]} />
          <TextInput source="owner_id" validate={[]} />
          <ReferenceInput source="parent_conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="category_id" reference="config_item_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="notes" validate={[]} />
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="region_id" reference="region">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="city_id" reference="city">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="street" validate={[]} />
          <TextInput source="address" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="provider_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="business_process_id" validate={[]} />
          <NumberInput source="priority" validate={[]} />
          <TextInput source="conf_item_image" validate={[]} />
          <TextInput source="description" validate={[]} />
          <ReferenceInput source="parsing_status_id" reference="conf_item_parsing_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="need_parse" validate={[]} />
          <ReferenceInput source="confidence_level_id" reference="data_confidence_level">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="data_quality_level_id" reference="data_quality_level">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="prime_entity_name" validate={[]} />
          <NumberInput source="quest_reward" validate={[]} />
          <TextInput source="url" validate={[]} />
          <TextInput source="page_model" validate={[]} />
          <NumberInput source="quest_cycle_interval" validate={[]} />
          <TextInput source="quest_type_id" validate={[]} />
      </>
    }
  />
);
