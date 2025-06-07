import { BooleanInput, DateInput, NumberInput, TextInput ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ContactCommunicationEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="number"  />
          <TextInput source="contact_id"  />
          <NumberInput source="position"  />
          <TextInput source="social_media_id"  />
          <TextInput source="search_number"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="is_created_by_synchronization"  />
          <TextInput source="external_communication_type"  />
          <BooleanInput source="non_actual"  />
          <DateInput source="date_set_non_actual"  />
          <BooleanInput source="primary"  />
      </>
    }
  />
);
