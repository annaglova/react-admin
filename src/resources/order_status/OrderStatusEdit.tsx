import { BooleanInput, NumberInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const OrderStatusEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <NumberInput source="position"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="final_status"  />
      </>
    }
  />
);
