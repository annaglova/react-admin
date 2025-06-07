import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetServiceEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="service_type_id" reference="pet_service_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_id"  />
          <ReferenceInput source="currency_id" reference="currency">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="price"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="pet_service_status_id" reference="pet_service_status">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="date"  />
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
