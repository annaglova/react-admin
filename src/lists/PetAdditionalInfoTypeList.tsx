
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

const PetAdditionalInfoTypeFilters = [ 
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
  ];

export const PetAdditionalInfoTypeList = () => (
  <List filters={PetAdditionalInfoTypeFilters}>
    <Datagrid>
      {/* Додай потрібні поля */}
    </Datagrid>
  </List>
);
