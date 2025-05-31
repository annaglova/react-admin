import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const LocationTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="event_type_id" reference="event_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
