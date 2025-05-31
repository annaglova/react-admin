import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

const ServiceItemFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServiceItemList = () => (
  <List filters={ServiceItemFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="reaction_time_value" />
      <TextField source="reaction_time_unit_id" />
      <NumberField source="solution_time_value" />
      <TextField source="solution_time_unit_id" />
      <TextField source="notes" />
      <TextField source="reaction_time" />
      <TextField source="solution_time" />
      <TextField source="owner_id" />
      <ReferenceField source="calendar_id" reference="calendar">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="category_id" reference="service_category">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="sort_order" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
