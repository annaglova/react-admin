import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const UnitByMeasurementTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="measurement_type_id" reference="measurement_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="unit_id" reference="unit">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
