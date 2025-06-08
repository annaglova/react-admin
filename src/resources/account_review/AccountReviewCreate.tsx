import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const AccountReviewCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id"  />
          <NumberInput source="rating"  />
          <NumberInput source="order_number"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="review"  />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="test"  />
      </>
    }
  />
);
