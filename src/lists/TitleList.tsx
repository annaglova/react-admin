
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

const TitleFilters = [ 
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
  ];

export const TitleList = () => (
  <List filters={TitleFilters}>
    <Datagrid>
      {/* Додай потрібні поля */}
    </Datagrid>
  </List>
);
