import { BooleanInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const InvoicePaymentStatusCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <BooleanInput source="final_status" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="color" validate={[]} />
      </>
    }
  />
);
