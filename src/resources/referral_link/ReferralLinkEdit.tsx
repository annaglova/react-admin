import { TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ReferralLinkEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id" />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="code" />
      </>
    }
  />
);
