import { TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ReferralLinkCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="code" validate={[]} />
      </>
    }
  />
);
