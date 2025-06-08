import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PaymentInBreedEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="amount"  />
          <TextInput source="contact_id"  />
          <ReferenceInput source="invoice_id" reference="invoice">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="date"  />
      </>
    }
  />
);
