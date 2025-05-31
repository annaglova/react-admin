import { BooleanInput, Create, DateInput, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ConfItemCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="type_id" reference="config_item_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="serial_number" />
      <TextInput source="inventory_number" />
      <ReferenceInput source="status_id" reference="config_item_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="purchase_date" />
      <DateInput source="cancel_date" />
      <DateInput source="warranty_until" />
      <TextInput source="owner_id" />
      <ReferenceInput source="parent_conf_item_id" reference="conf_item">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="category_id" reference="config_item_category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="notes" />
      <ReferenceInput source="country_id" reference="country">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="region_id" reference="region">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="city_id" reference="city">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="street" />
      <TextInput source="address" />
      <ReferenceInput source="provider_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="business_process_id" />
      <NumberInput source="priority" />
      <TextInput source="conf_item_image" />
      <TextInput source="description" />
      <ReferenceInput source="parsing_status_id" reference="conf_item_parsing_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="need_parse" />
      <ReferenceInput source="confidence_level_id" reference="data_confidence_level">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="data_quality_level_id" reference="data_quality_level">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="prime_entity_name" />
      <NumberInput source="quest_reward" />
      <TextInput source="url" />
      <TextInput source="page_model" />
      <NumberInput source="quest_cycle_interval" />
      <TextInput source="quest_type_id" />
    </SimpleForm>
  </Create>
);
