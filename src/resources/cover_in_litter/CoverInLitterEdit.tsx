import { DateInput, ReferenceInput, SelectInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CoverInLitterEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="litter_id" reference="litter">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="cover_id" reference="cover">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <DateInput source="setup_date"  />
      </>
    }
  />
);
