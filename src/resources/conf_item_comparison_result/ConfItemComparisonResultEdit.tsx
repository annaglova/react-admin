import { NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ConfItemComparisonResultEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="delta"  />
          <TextInput source="contact_id"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="conf_item_minus_id" reference="conf_item">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="conf_item_plus_id" reference="conf_item">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
