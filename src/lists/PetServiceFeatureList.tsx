
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

const PetServiceFeatureFilters = [ 
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
  ];

export const PetServiceFeatureList = () => (
  <List filters={PetServiceFeatureFilters}>
    <Datagrid>
      {/* Додай потрібні поля */}
    </Datagrid>
  </List>
);
