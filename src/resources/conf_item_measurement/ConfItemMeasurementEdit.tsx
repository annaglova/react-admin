import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ConfItemMeasurementEdit = () => (
  <ResourceEditLayout
    name={
      <>{<NumberInput source="value"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="contact_id"  />
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
