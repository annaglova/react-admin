import { BooleanInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const RelationTypeEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="for_contact_contact"  />
          <BooleanInput source="for_account_contact"  />
          <BooleanInput source="for_contact_account"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="for_account_account"  />
          <ReferenceInput source="reverse_relation_type_id" reference="relation_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="include_into_container"  />
      </>
    }
  />
);
