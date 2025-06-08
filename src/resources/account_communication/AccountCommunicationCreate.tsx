import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const AccountCommunicationCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="number"  />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="position"  />
          <TextInput source="social_media_id"  />
          <TextInput source="search_number"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="primary"  />
          <BooleanInput source="exists"  />
          <BooleanInput source="non_actual"  />
          <DateInput source="date_set_non_actual"  />
      </>
    }
  />
);
