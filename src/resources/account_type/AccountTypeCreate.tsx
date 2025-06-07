import { NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const AccountTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <NumberInput source="priority" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="raw_data_model" validate={[]} />
          <TextInput source="color" validate={[]} />
      </>
    }
  />
);
