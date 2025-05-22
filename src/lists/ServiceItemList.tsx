import {
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const ServiceItemFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServiceItemList = () => (
  <List filters={ServiceItemFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <NumberField source="reaction_time_value" />
      <ReferenceField
        source="reaction_time_unit_id"
        reference="reaction_time_units"
      />
      <NumberField source="solution_time_value" />
      <ReferenceField
        source="solution_time_unit_id"
        reference="solution_time_units"
      />
      <DateField source="notes" />
      <TextField source="reaction_time" />
      <TextField source="solution_time" />
      <ReferenceField source="owner_id" reference="owners" />
      <ReferenceField source="calendar_id" reference="calendars" />
      <ReferenceField source="category_id" reference="categories" />
      <ReferenceField source="provider_id" reference="providers" />
      <NumberField source="sort_order" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
