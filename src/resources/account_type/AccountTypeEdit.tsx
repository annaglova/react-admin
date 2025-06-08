import { NumberInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const AccountTypeEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <NumberInput source="priority"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="raw_data_model"  />
          <TextInput source="color"  />
      </>
    }
  />
);
