import { BooleanInput, DateInput, NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ContactCommunicationCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="number" validate={[]} />
          <TextInput source="contact_id" validate={[]} />
          <NumberInput source="position" validate={[]} />
          <TextInput source="social_media_id" validate={[]} />
          <TextInput source="search_number" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="is_created_by_synchronization" validate={[]} />
          <TextInput source="external_communication_type" validate={[]} />
          <BooleanInput source="non_actual" validate={[]} />
          <DateInput source="date_set_non_actual" validate={[]} />
          <BooleanInput source="primary" validate={[]} />
      </>
    }
  />
);
