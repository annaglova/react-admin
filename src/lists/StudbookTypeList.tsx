
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

const StudbookTypeFilters = [ 
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
  ];

export const StudbookTypeList = () => (
  <List filters={StudbookTypeFilters}>
    <Datagrid>
      {/* Додай потрібні поля */}
    </Datagrid>
  </List>
);
