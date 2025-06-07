import { BooleanInput, ReferenceInput, SelectInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ConfItemInCaseEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="conf_item_id" reference="conf_item">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="major"  />
      </>
    }
  />
);
