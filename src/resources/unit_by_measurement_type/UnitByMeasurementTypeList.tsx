import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const UnitByMeasurementTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="measurement_type_id" reference="measurement_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="unit_id" reference="unit">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
