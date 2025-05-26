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

const ServicePactFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServicePactList = () => (
  <List filters={ServicePactFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      {/* Додай тут інші поля для цього ресурсу */}
    </Datagrid>
  </List>
);
