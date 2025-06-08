import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const FinAccountEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="amount"  />
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="contact_id"  />
          <DateInput source="date"  />
      </>
    }
  />
);
