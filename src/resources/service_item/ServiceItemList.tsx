import { Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ServiceItemFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServiceItemList = () => (
  <List filters={ServiceItemFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <NumberField source="reaction_time_value" label="Reaction Time Value" />
      <TextField source="reaction_time_unit_id" label="Reaction Time Unit Id" />
      <NumberField source="solution_time_value" label="Solution Time Value" />
      <TextField source="solution_time_unit_id" label="Solution Time Unit Id" />
      <TextField source="notes" label="Notes" />
      <TextField source="reaction_time" label="Reaction Time" />
      <TextField source="solution_time" label="Solution Time" />
      <TextField source="owner_id" label="Owner Id" />
      <ReferenceField source="calendar_id" reference="calendar" label="Calendar Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="category_id" reference="service_category" label="Category Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="provider_id" reference="account" label="Provider Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="sort_order" label="Sort Order" />
      <TextField source="description" label="Description" />
    </Datagrid>
  </List>
);
