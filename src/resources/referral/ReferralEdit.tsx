import { TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ReferralEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="code"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="contact_id"  />
      </>
    }
  />
);
