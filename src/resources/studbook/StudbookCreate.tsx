import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const StudbookCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="account_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="status_id" reference="studbook_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="type_id" reference="studbook_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="alternate_names" />
    </SimpleForm>
  </Create>
);
