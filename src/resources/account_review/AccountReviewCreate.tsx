import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const AccountReviewCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id" validate={[]} />
          <NumberInput source="rating" validate={[]} />
          <NumberInput source="order_number" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="review" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="test" validate={[]} />
      </>
    }
  />
);
