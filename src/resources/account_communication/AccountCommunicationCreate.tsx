import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const AccountCommunicationCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="number" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="position" validate={[]} />
          <TextInput source="social_media_id" validate={[]} />
          <TextInput source="search_number" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="primary" validate={[]} />
          <BooleanInput source="exists" validate={[]} />
          <BooleanInput source="non_actual" validate={[]} />
          <DateInput source="date_set_non_actual" validate={[]} />
      </>
    }
  />
);
