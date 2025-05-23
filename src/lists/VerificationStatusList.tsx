
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

const VerificationStatusFilters = [ 
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
  ];

export const VerificationStatusList = () => (
  <List filters={VerificationStatusFilters}>
    <Datagrid>
      {/* Додай потрібні поля */}
    </Datagrid>
  </List>
);
