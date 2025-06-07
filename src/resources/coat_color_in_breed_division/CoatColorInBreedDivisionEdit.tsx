import { ReferenceInput, SelectInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CoatColorInBreedDivisionEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_division_id" reference="breed_division">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="coat_color_id" reference="coat_color">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="breed_id" reference="breed">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
