import { ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CollectionEntityEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="record_id"  />
          <ReferenceInput source="collection_id" reference="collection">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="contact_id" reference="contact">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="account_id" reference="account">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="event_id" reference="event">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_id"  />
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
