import { ReferenceInput, SelectInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ServiceRelationshipEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="service_item_a_id" reference="service_item">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="service_item_b_id" reference="service_item">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="dependency_category_id" reference="dependency_category">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="dependency_type_id" reference="dependency_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
