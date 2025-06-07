import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const DependencyTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <BooleanInput source="for_service_service" validate={[]} />
          <BooleanInput source="for_conf_item_conf_item" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="for_service_conf_item" validate={[]} />
          <TextInput source="reverse_type_name" validate={[]} />
          <ReferenceInput source="dependency_category_id" reference="dependency_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
