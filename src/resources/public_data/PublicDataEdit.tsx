import { BooleanInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PublicDataEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="hash_md5"  />
          <ReferenceInput source="account_id" reference="account">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="contact_id"  />
          <TextInput source="pet_id"  />
          <ReferenceInput source="breed_id" reference="breed">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="event_id" reference="event">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="project_id" reference="project">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="record_id"  />
          <TextInput source="model"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="entity_name"  />
          <BooleanInput source="primary"  />
          <ReferenceInput source="redirect_id" reference="public_data">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_type_id" reference="pet_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="country_id" reference="country">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_titles_id" reference="title_in_pet">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="has_owner"  />
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
