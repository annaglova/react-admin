import { BooleanInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const InvoicePaymentStatusEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="final_status"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="color"  />
      </>
    }
  />
);
