import { BooleanInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const RelationshipEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="relation_type_id" reference="relation_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="reverse_relation_type_id" reference="relation_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="active"  />
          <TextInput source="description"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="account_a_id" reference="account">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="contact_a_id" reference="contact">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="account_b_id" reference="account">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="contact_b_id" reference="contact">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
