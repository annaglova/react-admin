import { NumberInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const OrderDeliveryStatusEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="position"  />
      </>
    }
  />
);
