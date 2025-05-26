import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
  UrlField,
} from "react-admin";

const ServiceItemFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServiceItemList = () => (
  <List filters={ServiceItemFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      {/* Додай тут інші поля для цього ресурсу */}
    </Datagrid>
  </List>
);
