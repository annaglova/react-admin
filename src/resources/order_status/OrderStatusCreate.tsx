import { BooleanInput, NumberInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const OrderStatusCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <NumberInput source="position" />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="final_status" />
      </>
    }
  />
);
