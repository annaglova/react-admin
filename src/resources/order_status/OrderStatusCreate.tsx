import { BooleanInput, NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const OrderStatusCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <NumberInput source="position" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="final_status" validate={[]} />
      </>
    }
  />
);
