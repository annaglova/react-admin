import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetServiceByOptionsEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <ReferenceInput source="status_id" reference="pet_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="sex_id" reference="sex">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="service_type_id" reference="pet_service_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
